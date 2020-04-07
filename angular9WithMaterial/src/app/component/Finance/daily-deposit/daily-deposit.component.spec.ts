import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDepositComponent } from './daily-deposit.component';

describe('DailyDepositComponent', () => {
  let component: DailyDepositComponent;
  let fixture: ComponentFixture<DailyDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
