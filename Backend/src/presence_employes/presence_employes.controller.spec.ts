import { Test, TestingModule } from '@nestjs/testing';
import { PresenceEmployesController } from './presence_employes.controller';
import { PresenceEmployesService } from './presence_employes.service';

describe('PresenceEmployesController', () => {
  let controller: PresenceEmployesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresenceEmployesController],
      providers: [PresenceEmployesService],
    }).compile();

    controller = module.get<PresenceEmployesController>(PresenceEmployesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
