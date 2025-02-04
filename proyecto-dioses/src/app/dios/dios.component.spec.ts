import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiosComponent } from './dios.component';

describe('DiosComponent', () => {
  let component: DiosComponent;
  let fixture: ComponentFixture<DiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
