import { TestBed } from '@angular/core/testing';

import { DiosBatallaService } from './dios-batalla.service';

describe('DiosBatallaService', () => {
  let service: DiosBatallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiosBatallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
