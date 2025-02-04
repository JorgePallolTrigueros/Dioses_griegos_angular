import { TestBed } from '@angular/core/testing';

import { BatallaListService } from './batalla-list.service';

describe('BatallaListService', () => {
  let service: BatallaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatallaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
