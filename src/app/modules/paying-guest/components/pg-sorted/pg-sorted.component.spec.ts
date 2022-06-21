import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgSortedComponent } from './pg-sorted.component';

describe('PgSortedComponent', () => {
  let component: PgSortedComponent;
  let fixture: ComponentFixture<PgSortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgSortedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgSortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
