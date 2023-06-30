import { Controller, HttpCode, Post, Req } from '@nestjs/common';
import { Request } from 'express';
const dbr = require("barcode4nodejs");

@Controller('readBarcodes')
export class ReadBarcodesController {
  @Post()
  @HttpCode(200)
  async decode(@Req() request: Request) {
    const body = request.body;
    const startTime = (new Date()).getTime();
    const results = await dbr.decodeBase64Async(body["base64"], dbr.formats.OneD | dbr.formats.PDF417 | dbr.formats.QRCode | dbr.formats.DataMatrix | dbr.formats.Aztec, "");
    const elapsedTime = (new Date()).getTime() - startTime;
    const response:any = {};
    response.results = [];
    for (let index = 0; index < results.length; index++) {
      const result = results[index];
      response.results.push({
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
    return response;
  }
}