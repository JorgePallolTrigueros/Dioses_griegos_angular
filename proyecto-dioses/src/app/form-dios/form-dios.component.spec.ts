import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDiosComponent } from './form-dios.component';

describe('FormDiosComponent', () => {
  let component: FormDiosComponent;
  let fixture: ComponentFixture<FormDiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
