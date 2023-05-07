import { Test, TestingModule } from '@nestjs/testing';
import { PresenceEtudiantsController } from './presence_etudiants.controller';
import { PresenceEtudiantsService } from './presence_etudiants.service';

describe('PresenceEtudiantsController', () => {
  let controller: PresenceEtudiantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresenceEtudiantsController],
      providers: [PresenceEtudiantsService],
    }).compile();

    controller = module.get<PresenceEtudiantsController>(PresenceEtudiantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
