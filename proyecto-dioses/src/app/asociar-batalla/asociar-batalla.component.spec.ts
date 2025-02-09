import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarBatallaComponent } from './asociar-batalla.component';

describe('AsociarBatallaComponent', () => {
  let component: AsociarBatallaComponent;
  let fixture: ComponentFixture<AsociarBatallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsociarBatallaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsociarBatallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
