import { NextRequest, NextResponse } from 'next/server'
import { getSanityWriteClient } from '@/lib/sanity.client'
import fs from 'fs/promises'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = (formData.get('name') as string) || ''
    const fatherName = (formData.get('fatherName') as string) || ''
    const mohalla = (formData.get('mohalla') as string) || ''
    const customMohalla = (formData.get('customMohalla') as string) || ''
    const referencePageNumber = (formData.get('referencePageNumber') as string) || ''

    const wifeName = (formData.get('wifeName') as string) || ''
    const wifeFatherName = (formData.get('wifeFatherName') as string) || ''
    const wifeMohalla = (formData.get('wifeMohalla') as string) || ''

    const sonsRaw = (formData.get('sons') as string) || '[]'
    const daughtersRaw = (formData.get('daughters') as string) || '[]'

    const phone = (formData.get('phone') as string) || ''
    const address = (formData.get('address') as string) || ''

    const bookingType = (formData.get('bookingType') as string) || 'standard_5000'
    const transactionId = (formData.get('transactionId') as string) || ''
    const submitterName = (formData.get('submitterName') as string) || name

    let sons: any[] = []
    let daughters: any[] = []

    try {
      sons = JSON.parse(sonsRaw)
    } catch {
      sons = []
    }

    try {
      daughters = JSON.parse(daughtersRaw)
    } catch {
      daughters = []
    }

    if (!name.trim() || !fatherName.trim() || !mohalla.trim()) {
      return NextResponse.json(
        { error: 'Name, Father Name, and Mohalla are required fields.' },
        { status: 400 }
      )
    }

    const token = process.env.SANITY_API_WRITE_TOKEN
    const client = getSanityWriteClient()

    let paymentSlipAssetId: string | null = null
    let colorPhotoAssetId: string | null = null

    const paymentSlipFile = formData.get('paymentSlip') as File | null
    const colorPhotoFile = formData.get('colorPhoto') as File | null

    // Upload assets if token is present
    if (token) {
      if (paymentSlipFile && paymentSlipFile.size > 0) {
        const buffer = Buffer.from(await paymentSlipFile.arrayBuffer())
        const asset = await client.assets.upload('image', buffer, {
          filename: paymentSlipFile.name,
        })
        paymentSlipAssetId = asset._id
      }

      if (colorPhotoFile && colorPhotoFile.size > 0) {
        const buffer = Buffer.from(await colorPhotoFile.arrayBuffer())
        const asset = await client.assets.upload('image', buffer, {
          filename: colorPhotoFile.name,
        })
        colorPhotoAssetId = asset._id
      }
    }

    const doc: any = {
      _type: 'lineageRecord',
      name: name.trim(),
      fatherName: fatherName.trim(),
      mohalla: mohalla.trim(),
      customMohalla: customMohalla.trim() || undefined,
      referencePageNumber: referencePageNumber.trim() || undefined,
      wifeDetails: {
        name: wifeName.trim() || undefined,
        fatherName: wifeFatherName.trim() || undefined,
        mohalla: wifeMohalla.trim() || undefined,
      },
      sons: sons
        .filter((s) => s.name && s.name.trim())
        .map((s, idx) => ({
          _key: `son_${idx}_${Date.now()}`,
          name: s.name.trim(),
          occupationOrNotes: s.occupationOrNotes?.trim() || undefined,
          isDeceased: Boolean(s.isDeceased),
        })),
      daughters: daughters
        .filter((d) => d.name && d.name.trim())
        .map((d, idx) => ({
          _key: `daughter_${idx}_${Date.now()}`,
          name: d.name.trim(),
          maritalStatus: d.maritalStatus || 'married',
          husbandName: d.maritalStatus === 'unmarried' ? undefined : d.husbandName?.trim(),
          husbandFatherName: d.maritalStatus === 'unmarried' ? undefined : d.husbandFatherName?.trim(),
          husbandMohalla: d.maritalStatus === 'unmarried' ? undefined : d.husbandMohalla?.trim(),
        })),
      contactDetails: {
        phone: phone.trim(),
        address: address.trim(),
      },
      advanceBooking: {
        bookingType,
        transactionId: transactionId.trim() || undefined,
        paymentStatus: 'pending',
        paymentSlipImage: paymentSlipAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: paymentSlipAssetId },
            }
          : undefined,
        colorPhoto: colorPhotoAssetId
          ? {
              _type: 'image',
              asset: { _type: 'reference', _ref: colorPhotoAssetId },
            }
          : undefined,
      },
      submissionMeta: {
        submitterName: submitterName.trim() || name.trim(),
        submittedAt: new Date().toISOString(),
        isApprovedForBook: false,
      },
    }

    let sanityCreatedDoc: any = null

    if (token) {
      try {
        sanityCreatedDoc = await client.create(doc)
      } catch (err: any) {
        console.error('Error writing to Sanity:', err)
        // Fall back to local backup
      }
    }

    // Always persist to local backup json as safety mechanism
    const backupDir = path.join(process.cwd(), 'data')
    await fs.mkdir(backupDir, { recursive: true })
    const backupFile = path.join(backupDir, 'submissions.json')

    let existingData: any[] = []
    try {
      const content = await fs.readFile(backupFile, 'utf8')
      existingData = JSON.parse(content)
    } catch {
      existingData = []
    }

    const savedRecord = {
      id: sanityCreatedDoc?._id || `local_${Date.now()}`,
      ...doc,
      savedToSanity: Boolean(sanityCreatedDoc),
      hasToken: Boolean(token),
    }

    existingData.unshift(savedRecord)
    await fs.writeFile(backupFile, JSON.stringify(existingData, null, 2))

    return NextResponse.json({
      success: true,
      id: savedRecord.id,
      savedToSanity: Boolean(sanityCreatedDoc),
      message: sanityCreatedDoc
        ? 'Record successfully saved directly to your Sanity Studio database!'
        : 'Record captured and secured! Set SANITY_API_WRITE_TOKEN in .env.local to enable direct cloud writing.',
    })
  } catch (error: any) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
