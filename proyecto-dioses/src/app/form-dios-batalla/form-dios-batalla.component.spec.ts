import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiosBatallaComponent } from './form-dios-batalla.component';

describe('FormDiosBatallaComponent', () => {
  let component: FormDiosBatallaComponent;
  let fixture: ComponentFixture<FormDiosBatallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDiosBatallaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiosBatallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
