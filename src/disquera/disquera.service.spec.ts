import { Test, TestingModule } from '@nestjs/testing';
import { DisqueraService } from './disquera.service';

describe('DisqueraService', () => {
  let service: DisqueraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisqueraService],
    }).compile();

    service = module.get<DisqueraService>(DisqueraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
