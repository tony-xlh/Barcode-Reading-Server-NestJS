import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
const dbr = require("barcode4nodejs");
//dbr.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==")
dbr.initLicense("t0074oQAAABz1tASEoWT4IIp00emVmVI9CDkIbZtyKBCrSbAZcltlVnqIuM6/r5afZwkP60uzSrBlN5kTWD1Y2IIawWEUYSDZAwjyIxQ=");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '50mb'}))
  await app.listen(3000);
}

bootstrap();
