import { TestBed } from '@angular/core/testing';

import { PthPersonService } from './pth-person.service';

describe('PthPersonService', () => {
  let service: PthPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PthPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
