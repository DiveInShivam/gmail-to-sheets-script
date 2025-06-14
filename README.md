# 📧 Gmail to Google Sheets Automation

This project automates the extraction of email data (like sender, subject, date, and message snippet) from your Gmail inbox and logs it into a Google Sheet using Google Apps Script.

## 🔧 Features

- Extracts latest Gmail emails (by default: 10 recent threads)
- Logs the following data into a Google Sheet named `intern`:
  - Date
  - Sender
  - Subject
  - Message snippet
- Automatically creates the sheet if it doesn't exist
- Can be extended for keyword filtering, daily automation, or structured parsing

## 💻 Technologies Used

- Google Apps Script (JavaScript-based)
- GmailApp & SpreadsheetApp services
