import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActualmenteComponent } from './form-actualmente.component';

describe('FormActualmenteComponent', () => {
  let component: FormActualmenteComponent;
  let fixture: ComponentFixture<FormActualmenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormActualmenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormActualmenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
