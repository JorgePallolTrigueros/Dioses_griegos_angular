import { TestBed } from '@angular/core/testing';

import {  ActualenteService} from './actualmente.service';

describe('ActualmenteService', () => {
  let service: ActualenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
