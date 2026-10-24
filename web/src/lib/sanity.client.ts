import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'rohuunpd'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-24'

// Public read client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Server-side write client
export const getSanityWriteClient = () => {
  const token = process.env.SANITY_API_WRITE_TOKEN
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: token || undefined,
  })
}
