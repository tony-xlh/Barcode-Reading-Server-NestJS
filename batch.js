const dbr = require("barcode4nodejs");
dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==");

var count = 0;

batchDecode();
setTimeout(decodingDone,100);

function decodingDone(){
  if (count < 100) {
    setTimeout(decodingDone, 100);
  }
}

async function batchDecode() {
  for (let index = 0; index < 1000; index++) {
    const response = {};
    const results = [];
    const startTime = (new Date()).getTime();
    const barcodeResults = await dbr.decodeFileAsync("test.png", dbr.formats.OneD | dbr.formats.PDF417 | dbr.formats.QRCode | dbr.formats.DataMatrix | dbr.formats.Aztec,"");
    const elapsedTime = (new Date()).getTime() - startTime;
    count = count + 1;
    console.log(count);
    for (let index = 0; index < barcodeResults.length; index++) {
      const result = barcodeResults[index];
      results.push({
        barcodeText: result.value,
        barcodeFormat: result.format,
        x1: result.x1,
        x2: result.x2,
        x3: result.x3,
        x4: result.x4,
        y1: result.y1,
        y2: result.y2,
        y3: result.y3,
        y4: result.y4
      })
    }
    response.elapsedTime = elapsedTime;
    response.results = results;
    console.log(response);
  }
}


