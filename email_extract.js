function extractEmailsToInternSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("intern");
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("intern");
    sheet.appendRow(["Date", "Sender", "Subject", "Snippet"]);
  }
  var threads = GmailApp.getInboxThreads(0, 10);
  for (var i = 0; i < threads.length; i++) {
    var message = threads[i].getMessages()[0];
    var date = message.getDate();
    var from = message.getFrom();
    var subject = message.getSubject();
    var bodySnippet = message.getPlainBody().substring(0, 100);

    sheet.appendRow([date, from, subject, bodySnippet]);
  }
}

function doGet() {
  return ContentService.createTextOutput("This is Shivam's Gmail to Google Sheets Script");
}

