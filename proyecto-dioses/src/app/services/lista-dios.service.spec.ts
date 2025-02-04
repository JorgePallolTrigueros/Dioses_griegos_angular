import { TestBed } from '@angular/core/testing';

import { ListaDiosService } from './lista-dios.service';

describe('ListaDiosService', () => {
  let service: ListaDiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
