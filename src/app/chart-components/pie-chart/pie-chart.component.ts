import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public pieChartType: ChartConfiguration<'pie'>['type'] = 'pie';
  public pieChartData?: ChartConfiguration<'pie'>['data'];
  public pieChartOptions?: ChartConfiguration<'pie'>['options'];
  public pieChartLegend?: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.pieChartData = {
      labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
      datasets: [{
        data: [300, 500, 100]
      }]
    };

    this.pieChartOptions = {
      responsive: true
    };

    this.chart?.render();
  }
}
