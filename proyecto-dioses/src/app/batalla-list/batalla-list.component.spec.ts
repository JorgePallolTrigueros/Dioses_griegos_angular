import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallaListComponent } from './batalla-list.component';

describe('BatallaListComponent', () => {
  let component: BatallaListComponent;
  let fixture: ComponentFixture<BatallaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatallaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatallaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
