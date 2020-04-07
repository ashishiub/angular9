import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RndtestingComponent } from './rndtesting.component';

describe('RndtestingComponent', () => {
  let component: RndtestingComponent;
  let fixture: ComponentFixture<RndtestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RndtestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RndtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
