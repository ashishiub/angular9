import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyDepositReportComponent } from './monthly-deposit-report.component';

describe('MonthlyDepositReportComponent', () => {
  let component: MonthlyDepositReportComponent;
  let fixture: ComponentFixture<MonthlyDepositReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyDepositReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyDepositReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
