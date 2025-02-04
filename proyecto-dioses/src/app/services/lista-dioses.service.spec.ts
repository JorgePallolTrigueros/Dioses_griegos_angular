import { TestBed } from '@angular/core/testing';

import { ListaDiosesService } from './lista-dioses.service';

describe('ListaDiosesService', () => {
  let service: ListaDiosesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaDiosesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
