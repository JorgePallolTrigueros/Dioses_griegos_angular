import { TestBed } from '@angular/core/testing';

import { BatallaService } from './batalla.service';

describe('BatallaService', () => {
  let service: BatallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
