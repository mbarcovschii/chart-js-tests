import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { BarChartComponent } from '../chart-components/bar-chart/bar-chart.component';
import { LineChartComponent } from '../chart-components/line-chart/line-chart.component';
import { ScatterChartComponent } from '../chart-components/scatter-chart/scatter-chart.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  @ViewChild(LineChartComponent) lineChart?: LineChartComponent;
  @ViewChild(BarChartComponent) barChart?: BarChartComponent;
  @ViewChild(ScatterChartComponent) scatterChart?: ScatterChartComponent;

  constructor() { 
  }

  ngOnInit(): void {
  }

  public onChange(event: MatTabChangeEvent) {
    const tab = event.tab.textLabel;
    if (tab == 'Line') {
      // this.lineChart?.renderChart();
    } else if (tab == 'Bar') {
      // this.barChart?.renderChart();
    } else if (tab == 'Scatter') {
      // this.scatterChart?.renderChart();
    }
  }
}
