import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPlotsChartComponentComponent } from './scatter-chart.component';

describe('ScatterPlotsChartComponentComponent', () => {
  let component: ScatterPlotsChartComponentComponent;
  let fixture: ComponentFixture<ScatterPlotsChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterPlotsChartComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatterPlotsChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
