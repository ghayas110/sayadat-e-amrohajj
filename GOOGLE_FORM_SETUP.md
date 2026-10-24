# Sayadat-e-Amroha Lineage Record
## Google Form Setup Guide (Option 1: Multi-line Paragraphs)

This setup uses **Option 1 (Multi-line Paragraphs)**, which is the most flexible approach for handling variable numbers of sons and daughters.

---

### Method A: Instant 1-Click Setup with Google Apps Script (Fastest)

You can generate this exact Google Form automatically inside your Google Drive in 30 seconds:

1. Open your browser and go to [script.new](https://script.new).
2. Delete any code in the editor, and paste the code from [create_google_form.gs](file:///Users/ghayasall/Documents/GitHub/sayadat-e-amroha/create_google_form.gs).
3. Click the **Save** icon (disk), then click **Run**.
4. Grant permission when prompted (Google will ask permission to create a form in your Drive).
5. Open the **Execution Log** at the bottom to see your:
   - **Edit URL** (to customize or review settings)
   - **Published URL** (the live form link to share on WhatsApp and social media)

---

### Method B: Manual Setup on Google Forms

If you prefer building it manually, go to [forms.new](https://forms.new) and add the following questions:

#### Form Title:
> **Sayadat-e-Amroha Lineage Record | معلومات برائے شجرۂ نسب**
> *(New Computerized Edition / نیا کمپیوٹرائزڈ ایڈیشن)*

#### Form Description:
```text
Following the publication of the genealogical book Kausar-ul-Ansab by Syed Nazar-e-Hasnain Naqvi (Mohalla Gher Manaf) from Karachi in 1999, information is now being collected to publish a new computerized edition of the book titled "Sayadat-e-Amroha Lineage Record" after 27 years. You are requested to fill out this form with your and your family's details.

(This form can be filled out in either Urdu or English / یہ فارم اردو یا انگریزی دونوں میں پُر کیا جا سکتا ہے)
```

---

### Section 1: Lineage & Family Head (سرپرست اور خاندانی شجرہ)

| # | Question Title | Question Type | Required | Description / Help Text |
|---|---|---|---|---|
| 1 | Name (Syed) / نام مع سید | Short answer | Yes | e.g. Syed Muhammad Ali Naqvi |
| 2 | Father's Name / والد کا نام | Short answer | Yes | e.g. Syed Nazar-e-Hasnain Naqvi |
| 3 | Mohalla in Amroha / امروحہ کا محلہ | Short answer | Yes | e.g. Mohalla Tripolia, Gher Manaf, Chhappah, Sadat, Danishmandan, etc. |
| 4 | Reference Page No. in Kausar-ul-Ansab / کوثر الانساب کا حوالہ صفحہ | Short answer | No | اگر پرانی کتاب کا صفحہ معلوم ہو تو درج کریں (Leave blank if unknown) |
| 5 | Wife's Name with Father's Name & Mohalla / زوجہ کا نام مع ولدیت و محلہ | Short answer | No | e.g. Syeda Zahra Bano d/o Syed Akhtar Hussain (Mohalla Chhappah) |

---

### Section 2: Children (اولاد کی تفصیلات - Option 1)

Click **Add Section** (two bars icon in the right floating toolbar):
- Section Title: **2. Children / اولاد کی تفصیلات (Sons & Daughters)**

#### Question 6:
* **Title:** `Sons' Names (Syed) / بیٹوں کے نام (سید)`
* **Type:** **Paragraph (Long answer)**
* **Required:** No
* **Description:**
  ```text
  List all sons on separate lines. (اگر بیٹے نہیں ہیں تو خالی چھوڑ دیں)

  Example / مثال:
  1. Syed Ali Raza Naqvi
  2. Syed Hasan Raza Naqvi
  3. Syed Muhammad Abbas Naqvi
  ```

#### Question 7:
* **Title:** `Daughters' Names (Syeda) & Husbands' Names / بیٹیوں اور دامادوں کے نام`
* **Type:** **Paragraph (Long answer)**
* **Required:** No
* **Description:**
  ```text
  List all daughters on separate lines along with husband's name and family/mohalla. (اگر بیٹیاں نہیں ہیں تو خالی چھوڑ دیں)

  Example / مثال:
  1. Syeda Fatima Zahra (Husband: Syed Zafar Abbas, Mohalla Chhappah)
  2. Syeda Sakina Naqvi (Husband: Syed Nadeem Raza, Mohalla Sadat)
  3. Syeda Zainab (Unmarried / غیر شادی شدہ)
  ```

---

### Section 3: Contact & Delivery (رابطہ اور پتہ)

Click **Add Section**:
- Section Title: **3. Contact & Delivery / ذاتی معلومات اور پتہ**
- Section Description:
  > *Note: Phone numbers and home addresses will NOT be published in the book. They are strictly for courier delivery and verification.*
  > *(فون نمبر اور گھر کا پتہ کتاب میں شائع نہیں کیا جائے گا)*

| # | Question Title | Question Type | Required | Description |
|---|---|---|---|---|
| 8 | Phone / WhatsApp Number / فون یا واٹس ایپ نمبر | Short answer | Yes | e.g. 0345-2695417 |
| 9 | Complete Postal Address for Courier / مکمل ڈاک کا پتہ | Paragraph | Yes | House No., Street, Area, City, Country |

---

### Section 4: Advance Booking & Payment (پیشگی بکنگ اور ادائیگی)

Click **Add Section**:
- Section Title: **4. Advance Booking & Bank Details / پیشگی بکنگ**
- Section Description:
  ```text
  Book Price: Rs. 5,000 (Five Thousand Rupees)
  Photo Option: Additional Rs. 2,000 to include a passport-size color photograph (Total Rs. 7,000)
  Book Details: ~250 pages, color printing on high-quality paper, elegant cover. Delivery charges paid by recipient upon delivery.

  Bank Details / بینک اکاؤنٹ کی تفصیلات:
  • Account Title: Syed Sibte Said Naqvi
  • Bank: Bank AL Habib Limited
  • Branch: Incholi Federal B Area, Karachi, Pakistan
  • Account Number: 1318007801332801-9
  • IBAN: PK BAHL 1318007801332801-9
  • Send deposit slip photo on WhatsApp: 0345-2695417
  ```

| # | Question Title | Question Type | Required | Options / Notes |
|---|---|---|---|---|
| 10 | Advance Booking Selection / پیشگی بکنگ کا انتخاب | Multiple Choice | Yes | • Standard Book - Rs. 5,000<br>• Book with Color Photo - Rs. 7,000<br>• Only Submitting Family Lineage (No book order now) |
| 11 | Payment Reference / Slip Note / رسید کا حوالہ | Short answer | No | Enter Transaction ID / Slip No. (Send screenshot to WhatsApp 0345-2695417) |
| 12 | Name of Person Submitting Form / فارم بھرنے والے کا نام | Short answer | Yes | Name of respondent |
| 13 | Submission Date / تاریخ | Date (or Short answer) | No | DD/MM/YYYY |

---

### Recommended Google Forms Settings:
1. Go to **Settings** $\rightarrow$ **Responses**:
   - Turn **OFF** "Limit to 1 response" (so one person can submit records for relatives if needed).
   - Turn **ON** "Allow response editing" (if someone needs to correct a spelling).
2. Go to **Responses** tab $\rightarrow$ click the green **Sheets icon** $\rightarrow$ **Create a new spreadsheet** to automatically receive all entries organized into Google Sheets.
