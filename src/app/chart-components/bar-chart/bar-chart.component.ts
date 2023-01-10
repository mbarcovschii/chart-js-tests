import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Plugin } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartType: ChartConfiguration<'bar'>['type'];
  public barChartData: ChartConfiguration<'bar'>['data'];
  public barChartOptions: ChartConfiguration<'bar'>['options'];
  public barChartPlugins: Plugin<'bar'>[];
  public barChartLegend: boolean;

  constructor() {
    this.barChartType = 'bar';
    this.barChartData = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
      ]
    };
    this.barChartOptions = {
      responsive: false,
    };
    this.barChartPlugins = [];
    this.barChartLegend = true;
  }

  ngOnInit(): void {
  }
}
