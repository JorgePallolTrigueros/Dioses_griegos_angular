import { TestBed } from '@angular/core/testing';

import { ListaMitosService } from './lista-mitos.service';

describe('ListaMitosService', () => {
  let service: ListaMitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaMitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
