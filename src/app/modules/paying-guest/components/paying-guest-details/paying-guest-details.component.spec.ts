import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingGuestDetailsComponent } from './paying-guest-details.component';

describe('PayingGuestDetailsComponent', () => {
  let component: PayingGuestDetailsComponent;
  let fixture: ComponentFixture<PayingGuestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayingGuestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingGuestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
