import { TestBed } from '@angular/core/testing';

import { DiosService } from './dios.service';

describe('DiosService', () => {
  let service: DiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
