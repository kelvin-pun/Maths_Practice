function doMath( formula ) {
  // Strip leading "=" if there
  if (formula.charAt(0) === '=') formula = formula.substring(1);
  return eval(formula)
}

function CreateNewSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("C1:C20").clearContent()
  sheet.getRange("I1:I20").clearContent()
  sheet.getRange("N1:N20").clearContent()
  for (var i=1; i<=20 ;i++) {
    sheet.getRange(i,1).setValue(Math.floor((Math.random()*9)+1))
    sheet.getRange(i,7).setValue(Math.floor((Math.random()*999)+1) + "+" + Math.floor((Math.random()*999)+1))
    a=Math.floor((Math.random()*999)+1)
    b=Math.floor((Math.random()*999)+1)
    if (a>b) {
      c="'"+a+"-"+b
    } else {
      c="'"+b+"-"+a
    }
    sheet.getRange(i,12).setValue(c)
  }
}


function CreateMultiplySheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("C1:C10").clearContent()
  for (var i=1; i<=10 ;i++) {
    sheet.getRange(i,1).setValue(Math.floor((Math.random()*999)+1) + " X " + Math.floor((Math.random()*8)+2))
  }
}

function CreateDivisionSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange("E1:E10").clearContent()
  sheet.getRange("G1:G10").clearContent()
  for (var i=1; i<=10 ;i++) {
    sheet.getRange(i,1).setValue(Math.floor((Math.random()*999)+1))
    sheet.getRange(i,3).setValue(Math.floor((Math.random()*8)+2))
  }
}
