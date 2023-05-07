import { Test, TestingModule } from '@nestjs/testing';
import { PresenceEtudiantsService } from './presence_etudiants.service';

describe('PresenceEtudiantsService', () => {
  let service: PresenceEtudiantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenceEtudiantsService],
    }).compile();

    service = module.get<PresenceEtudiantsService>(PresenceEtudiantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
