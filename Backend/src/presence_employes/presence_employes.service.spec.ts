import { Test, TestingModule } from '@nestjs/testing';
import { PresenceEmployesService } from './presence_employes.service';

describe('PresenceEmployesService', () => {
  let service: PresenceEmployesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenceEmployesService],
    }).compile();

    service = module.get<PresenceEmployesService>(PresenceEmployesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
