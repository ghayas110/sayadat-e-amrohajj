function createSayadatAmrohaForm() {
  // Create the form
  var form = FormApp.create("Sayadat-e-Amroha Lineage Record | معلومات برائے شجرۂ نسب");
  
  form.setDescription(
    "Sayadat-e-Amroha Lineage Record (New Computerized Edition)\n" +
    "سیادتِ امروحہ - خاندانی شجرۂ نسب (نیا کمپیوٹرائزڈ ایڈیشن)\n\n" +
    "Following the publication of the genealogical book Kausar-ul-Ansab by Syed Nazar-e-Hasnain Naqvi (Mohalla Gher Manaf) from Karachi in 1999, " +
    "information is now being collected to publish a new computerized edition titled 'Sayadat-e-Amroha Lineage Record' after 27 years. " +
    "You are requested to fill out this form with your and your family's lineage details.\n\n" +
    "نوٹ: یہ فارم اردو یا انگریزی دونوں میں پُر کیا جا سکتا ہے۔\n" +
    "(This form can be filled out in either Urdu or English)"
  );
  
  // -------------------------------------------------------------
  // SECTION 1: Head of Family / Lineage Details
  // -------------------------------------------------------------
  var sec1 = form.addSectionHeaderItem();
  sec1.setTitle("1. Family Head & Shijra Details | سرپرست اور خاندانی شجرہ");
  sec1.setHelpText("Please enter the primary person's lineage details.");

  // Name
  var item1 = form.addTextItem();
  item1.setTitle("Name (Syed) / نام مع سید");
  item1.setHelpText("e.g. Syed Muhammad Ali Naqvi");
  item1.setRequired(true);

  // Father's Name
  var item2 = form.addTextItem();
  item2.setTitle("Father's Name / والد کا نام (سید)");
  item2.setHelpText("e.g. Syed Nazar-e-Hasnain Naqvi");
  item2.setRequired(true);

  // Mohalla in Amroha
  var item3 = form.addTextItem();
  item3.setTitle("Mohalla in Amroha / امروحہ کا محلہ");
  item3.setHelpText("e.g. Mohalla Tripolia, Gher Manaf, Chhappah, Sadat, Shafat Pota, Danishmandan, etc.");
  item3.setRequired(true);

  // Reference Page Number
  var item4 = form.addTextItem();
  item4.setTitle("Reference Page Number in Kausar-ul-Ansab (1999) / کوثر الانساب کا حوالہ صفحہ نمبر");
  item4.setHelpText("اگر کوثر الانساب کا صفحہ نمبر معلوم ہے تو درج کریں، ورنہ خالی چھوڑ دیں۔ (If known, enter page number; otherwise leave blank)");
  item4.setRequired(false);

  // Wife's Name
  var item5 = form.addTextItem();
  item5.setTitle("Wife's Name with Father's Name & Mohalla / زوجہ کا نام مع ولدیت و محلہ");
  item5.setHelpText("e.g. Syeda Zahra Bano d/o Syed Akhtar Hussain (Mohalla Chhappah)");
  item5.setRequired(false);

  // -------------------------------------------------------------
  // SECTION 2: Children (Option 1: Multi-line Paragraphs)
  // -------------------------------------------------------------
  form.addPageBreakItem().setTitle("2. Children / اولاد کی تفصیلات (Sons & Daughters)");

  // Sons
  var itemSons = form.addParagraphTextItem();
  itemSons.setTitle("Sons' Names (Syed) / بیٹوں کے نام (سید)");
  itemSons.setHelpText(
    "List all sons on separate lines with their details. (اگر بیٹے نہیں ہیں تو خالی چھوڑ دیں)\n\n" +
    "Example / مثال:\n" +
    "1. Syed Ali Raza Naqvi\n" +
    "2. Syed Hasan Raza Naqvi\n" +
    "3. Syed Muhammad Abbas Naqvi"
  );
  itemSons.setRequired(false);

  // Daughters
  var itemDaughters = form.addParagraphTextItem();
  itemDaughters.setTitle("Daughters' Names (Syeda) & Husbands' Names / بیٹیوں کے نام اور دامادوں کے نام");
  itemDaughters.setHelpText(
    "List all daughters on separate lines along with husband's name and family/mohalla if applicable. (اگر بیٹیاں نہیں ہیں تو خالی چھوڑ دیں)\n\n" +
    "Example / مثال:\n" +
    "1. Syeda Fatima Zahra (Husband: Syed Zafar Abbas, Mohalla Chhappah)\n" +
    "2. Syeda Sakina Naqvi (Husband: Syed Nadeem Raza, Mohalla Sadat)\n" +
    "3. Syeda Zainab (Unmarried / غیر شادی شدہ)"
  );
  itemDaughters.setRequired(false);

  // -------------------------------------------------------------
  // SECTION 3: Private Contact & Address
  // -------------------------------------------------------------
  form.addPageBreakItem().setTitle("3. Contact & Delivery Information / رابطہ اور پتہ");

  var notePrivate = form.addSectionHeaderItem();
  notePrivate.setTitle("Privacy Note / رازداری کا نوٹ");
  notePrivate.setHelpText("Note: Phone numbers and home addresses will NOT be published in the book. They are strictly for contact and book courier delivery.\n(فون نمبر اور گھر کا پتہ کتاب میں شائع نہیں کیا جائے گا)");

  // Phone
  var itemPhone = form.addTextItem();
  itemPhone.setTitle("Phone / WhatsApp Number / فون یا واٹس ایپ نمبر");
  itemPhone.setHelpText("e.g. 0300-1234567 or +92-345-2695417");
  itemPhone.setRequired(true);

  // Address
  var itemAddress = form.addParagraphTextItem();
  itemAddress.setTitle("Complete Postal / Home Address for Courier / مکمل ڈاک کا پتہ");
  itemAddress.setHelpText("House No., Street, Area, City, Country (for sending the printed book)");
  itemAddress.setRequired(true);

  // -------------------------------------------------------------
  // SECTION 4: Advance Booking & Payment
  // -------------------------------------------------------------
  form.addPageBreakItem().setTitle("4. Advance Booking & Publication / پیشگی بکنگ اور تفصیلات");

  var bookDetails = form.addSectionHeaderItem();
  bookDetails.setTitle("Book Information / کتاب کی تفصیلات");
  bookDetails.setHelpText(
    "• Book Details: Approximately 250 pages, printed on high-quality paper with color printing and elegant cover.\n" +
    "• Standard Book Price: Rs. 5,000 (Five Thousand Rupees)\n" +
    "• Photo Inclusion Option: Additional Rs. 2,000 (Total Rs. 7,000) to include a passport-size color photograph in the book.\n" +
    "• Courier/delivery charges to be paid by recipient upon delivery.\n\n" +
    "Bank Details for Payment / بینک اکاؤنٹ کی تفصیلات:\n" +
    "• Account Title: Syed Sibte Said Naqvi\n" +
    "• Bank: Bank AL Habib Limited\n" +
    "• Branch: Incholi Federal B Area, Karachi, Pakistan\n" +
    "• Account Number: 1318007801332801-9\n" +
    "• IBAN: PK BAHL 1318007801332801-9\n" +
    "• WhatsApp for Payment Slip: 0345-2695417"
  );

  // Booking selection
  var itemBooking = form.addMultipleChoiceItem();
  itemBooking.setTitle("Advance Booking Selection / پیشگی بکنگ کا انتخاب");
  itemBooking.setChoiceValues([
    "Standard Book - Rs. 5,000 / عام کتاب (5,000 روپے)",
    "Book with Color Photograph Included - Rs. 7,000 / کتاب مع پاسپورٹ سائز رنگین تصویر (7,000 روپے)",
    "Only submitting family records / فی الحال صرف شجرہ جمع کروانا ہے (کتاب بعد میں)"
  ]);
  itemBooking.setRequired(true);

  // Payment Reference / Slip Note
  var itemSlip = form.addParagraphTextItem();
  itemSlip.setTitle("Payment Slip Reference / Transaction ID / بینک رسید کا حوالہ");
  itemSlip.setHelpText("Please mention Transaction ID / Deposit Slip Number. Also send a photo of the deposit slip via WhatsApp to 0345-2695417.\n(رقم جمع کروانے کے بعد رسید واٹس ایپ پر ضرور بھیجیں)");
  itemSlip.setRequired(false);

  // Submitter Name
  var itemSubmitter = form.addTextItem();
  itemSubmitter.setTitle("Name of Person Submitting Form / فارم پُر کرنے والے کا نام");
  itemSubmitter.setRequired(true);

  // Submitter Relationship
  var itemDate = form.addTextItem();
  itemDate.setTitle("Submission Date / تاریخ");
  itemDate.setHelpText("e.g. DD-MM-YYYY");
  itemDate.setRequired(false);

  Logger.log("Form created successfully!");
  Logger.log("Edit URL: " + form.getEditUrl());
  Logger.log("Published (Live) URL: " + form.getPublishedUrl());
}
