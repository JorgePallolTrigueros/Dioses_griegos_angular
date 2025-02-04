import { TestBed } from '@angular/core/testing';

import { ListaBiografiaService } from './lista-biografia.service';

describe('ListaBiografiaService', () => {
  let service: ListaBiografiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaBiografiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
