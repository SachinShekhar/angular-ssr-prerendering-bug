import { async, TestBed } from '@angular/core/testing';
import { ArtificialIntelligenceModule } from './artificial-intelligence.module';

describe('ArtificialIntelligenceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArtificialIntelligenceModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArtificialIntelligenceModule).toBeDefined();
  });
});
