import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

import { LineChartComponent } from '../chart-components/line-chart/line-chart.component';
import { BarChartComponent } from '../chart-components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from '../chart-components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from '../chart-components/radar-chart/radar-chart.component';
import { ScatterChartComponent } from '../chart-components/scatter-chart/scatter-chart.component';
import { PieChartComponent } from '../chart-components/pie-chart/pie-chart.component';
import { PolarChartComponent } from '../chart-components/polar-chart/polar-chart.component';
import { BubbleChartComponent } from '../chart-components/bubble-chart/bubble-chart.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(LineChartComponent) lineChart?: LineChartComponent;
  @ViewChild(BarChartComponent) barChart?: BarChartComponent;
  @ViewChild(DoughnutChartComponent) doughtnutChart?: DoughnutChartComponent;
  @ViewChild(RadarChartComponent) radarChart?: RadarChartComponent;
  @ViewChild(PieChartComponent) pieChart?: PieChartComponent;
  @ViewChild(PolarChartComponent) polarChart?: PolarChartComponent;
  @ViewChild(BubbleChartComponent) bubbleChart?: BubbleChartComponent;
  @ViewChild(ScatterChartComponent) scatterChart?: ScatterChartComponent;
  @ViewChild(DashboardComponent) dashboard?: DashboardComponent;

  constructor() { 
  }

  ngOnInit(): void {
  }

  public onChange(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    if (tab == 'Line') {
      this.lineChart?.renderChart();
    } else if (tab == 'Bar') {
      this.barChart?.renderChart();
    } else if (tab == 'Doughnut') {
      this.doughtnutChart?.renderChart();
    } else if (tab == 'Radar') {
      this.radarChart?.renderChart();
    } else if (tab == 'Pie') {
      this.pieChart?.renderChart();
    } else if (tab == 'Polar Area') {
      this.polarChart?.renderChart();
    } else if (tab == 'Bubble') {
      this.bubbleChart?.renderChart();
    } else if (tab == 'Scatter') {
      this.scatterChart?.renderChart();
    } else if (tab == 'Dashboard') {
      this.dashboard?.renderCharts();
    }
  }
}
