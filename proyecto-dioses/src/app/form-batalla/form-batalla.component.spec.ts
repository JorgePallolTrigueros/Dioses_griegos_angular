import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBatallaComponent } from './form-batalla.component';

describe('FormBatallaComponent', () => {
  let component: FormBatallaComponent;
  let fixture: ComponentFixture<FormBatallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBatallaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBatallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
