import { Test, TestingModule } from '@nestjs/testing';
import { ReadBarcodesController } from './read-barcodes.controller';

describe('ReadBarcodesController', () => {
  let controller: ReadBarcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReadBarcodesController],
    }).compile();

    controller = module.get<ReadBarcodesController>(ReadBarcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
