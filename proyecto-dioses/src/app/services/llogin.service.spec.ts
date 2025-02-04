import { TestBed } from '@angular/core/testing';

import { LloginService } from './llogin.service';

describe('LloginService', () => {
  let service: LloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
