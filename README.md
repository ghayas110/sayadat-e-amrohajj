# Sayadat-e-Amroha Lineage Record (سیادتِ امروحہ)
### New Computerized Edition (2026) • Standalone Sanity Studio & Next.js Portal

Following the publication of the genealogical book **Kausar-ul-Ansab** by Syed Nazar-e-Hasnain Naqvi (Mohalla Gher Manaf) from Karachi in 1999, this computerized application collects, organizes, and verifies lineage records (*Shijra-e-Nasab*) for the upcoming edition published after 27 years under the leadership of **Syed Sibte Sajid Naqvi** (Mohalla Tripolia).

---

## Architecture Overview

This monorepo contains:
- **`studio/`**: Standalone **Sanity Studio v3** connected to Project ID `rohuunpd` (Dataset: `production`). Full schema for family head, Mohallas of Amroha, dynamic arrays of sons and daughters with marital records, private contact details, and advance booking payments.
- **`web/`**: Modern **Next.js 16** responsive web portal with bilingual support (Urdu & English), dynamic `+ Add Son` and `+ Add Daughter` controls, bank details card with 1-click copy, live Shijra Card preview, file uploads for deposit receipts & photos, and direct database sync with Sanity Studio.

```
sayadat-e-amroha/
├── studio/                  # Standalone Sanity Studio v3
│   ├── sanity.config.ts     # Project: rohuunpd, Dataset: production
│   ├── sanity.cli.ts        # Sanity CLI config
│   └── schemaTypes/
│       ├── index.ts
│       └── lineageRecord.ts # Complete Shijra & Advance Booking schema
├── web/                     # Next.js 16 Web Application
│   ├── src/app/
│   │   ├── page.tsx         # Interactive bilingual lineage collection form
│   │   ├── records/page.tsx # Public / Admin database records viewer
│   │   ├── api/
│   │   │   ├── submit-lineage/route.ts # Form submission & Sanity persistence
│   │   │   └── records/route.ts        # GROQ fetch endpoint
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── src/lib/sanity.client.ts        # Sanity Client configuration
│   └── .env.local           # Sanity credentials
└── package.json             # Root monorepo runner scripts
```

---

## Quick Start

### 1. Run the Web Application
```bash
npm run dev:web
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to fill out the form.

### 2. Run the Sanity Studio
In a separate terminal:
```bash
npm run dev:studio
```
Open **[http://localhost:3333](http://localhost:3333)** to view and manage all family records, verify payments, and approve records for book printing.

---

## Key Features

1. **Dynamic Multiple Sons & Daughters**:
   - Add as many sons as needed with individual details (name, profession, deceased status).
   - Add as many daughters as needed with marital status and husband details (husband's name, father's name, Mohalla/family).
   - Instant live preview card showing how the Shijra entry looks before submitting.

2. **Confidentiality by Design**:
   - Phone numbers and home addresses are flagged as confidential and excluded from book printing.

3. **Advance Booking & Payment Details**:
   - Standard Book: Rs. 5,000 (~250 pages, color print, elegant cover)
   - Book with Color Photo: Rs. 7,000 (includes passport-size portrait printed in book)
   - Official Bank AL Habib account details (`1318007801332801-9`) with 1-click copy for Title, Account Number, and IBAN.
   - Upload receipt / payment slip directly with WhatsApp confirmation to `0345-2695417`.

---

## Sanity Cloud Configuration

To enable direct writes to Sanity cloud from the web app:
1. Go to [sanity.io/manage](https://www.sanity.io/manage) $\rightarrow$ Project **rohuunpd** $\rightarrow$ **API** $\rightarrow$ **Tokens**.
2. Create an **Editor** or **Write** token.
3. Paste it in `web/.env.local`:
   ```bash
   SANITY_API_WRITE_TOKEN="your_token_here"
   ```
*(Even without a token, submissions are safely backed up in `web/data/submissions.json` so no community submission is ever lost).*
