import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public barChartType: ChartConfiguration<'bar'>['type'] = 'bar';
  public barChartData?: ChartConfiguration<'bar'>['data'];
  public barChartOptions?: ChartConfiguration<'bar'>['options'];
  public barChartLegend?: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ]
    };
    this.barChartOptions = {
      responsive: true
    };
    this.barChartLegend = true;
    this.chart?.render();
  }
}
