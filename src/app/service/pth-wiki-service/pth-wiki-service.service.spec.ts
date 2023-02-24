import { TestBed } from '@angular/core/testing';

import { PthWikiServiceService } from './pth-wiki-service.service';

describe('PthWikiServiceService', () => {
  let service: PthWikiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PthWikiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
