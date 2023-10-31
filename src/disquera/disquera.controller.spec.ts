import { Test, TestingModule } from '@nestjs/testing';
import { DisqueraController } from './disquera.controller';

describe('DisqueraController', () => {
  let controller: DisqueraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisqueraController],
    }).compile();

    controller = module.get<DisqueraController>(DisqueraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
