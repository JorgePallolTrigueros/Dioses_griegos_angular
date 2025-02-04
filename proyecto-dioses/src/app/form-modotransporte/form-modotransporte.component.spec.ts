import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModoTransporteComponent } from './form-modotransporte.component';

describe('FormModotransporteComponent', () => {
  let component: FormModoTransporteComponent;
  let fixture: ComponentFixture<FormModoTransporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModoTransporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModoTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
