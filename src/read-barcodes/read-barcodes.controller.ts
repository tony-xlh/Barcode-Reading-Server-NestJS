import { Controller, Post, Req } from '@nestjs/common';

@Controller('readBarcodes')
export class ReadBarcodesController {
  @Post()
  async decode(@Req() request: Request) {
    const json = await request.json();
    console.log(json);
    return 'This action returns all cats';
  }
}