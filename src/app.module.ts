import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadBarcodesController } from './read-barcodes/read-barcodes.controller';

@Module({
  imports: [],
  controllers: [AppController, ReadBarcodesController],
  providers: [AppService],
})
export class AppModule {}
