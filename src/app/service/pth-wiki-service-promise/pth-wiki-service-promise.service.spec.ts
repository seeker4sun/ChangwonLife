import { TestBed } from '@angular/core/testing';

import { PthWikiServicePromiseService } from './pth-wiki-service-promise.service';

describe('PthWikiServicePromiseService', () => {
  let service: PthWikiServicePromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PthWikiServicePromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
