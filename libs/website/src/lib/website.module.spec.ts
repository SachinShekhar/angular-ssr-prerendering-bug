import { async, TestBed } from '@angular/core/testing';
import { WebsiteModule } from './website.module';

describe('WebsiteModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebsiteModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebsiteModule).toBeDefined();
  });
});
