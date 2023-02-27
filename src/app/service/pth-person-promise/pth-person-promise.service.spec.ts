import { TestBed } from '@angular/core/testing';

import { PthPersonPromiseService } from './pth-person-promise.service';

describe('PthPersonPromiseService', () => {
  let service: PthPersonPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PthPersonPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
