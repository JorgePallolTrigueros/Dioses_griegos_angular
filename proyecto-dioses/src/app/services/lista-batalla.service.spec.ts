import { TestBed } from '@angular/core/testing';

import { ListaBatallaService } from './lista-batalla.service';

describe('ListaBatallaService', () => {
  let service: ListaBatallaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaBatallaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
