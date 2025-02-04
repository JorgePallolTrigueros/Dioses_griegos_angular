import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMitosComponent } from './form-mitos.component';

describe('FormMitosComponent', () => {
  let component: FormMitosComponent;
  let fixture: ComponentFixture<FormMitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormMitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
