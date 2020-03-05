import { Test, TestingModule } from '@nestjs/testing';
import { ProjetController } from './projet.controller';

describe('Projet Controller', () => {
  let controller: ProjetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetController],
    }).compile();

    controller = module.get<ProjetController>(ProjetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
