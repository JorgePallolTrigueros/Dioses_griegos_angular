import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDiosComponent } from './lista-dios.component';

describe('ListaDiosComponent', () => {
  let component: ListaDiosComponent;
  let fixture: ComponentFixture<ListaDiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
