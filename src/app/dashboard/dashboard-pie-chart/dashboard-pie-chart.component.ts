import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-pie-chart',
  templateUrl: './dashboard-pie-chart.component.html',
  styleUrls: ['./dashboard-pie-chart.component.css']
})
export class DashboardPieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  public pieChartType: ChartConfiguration<'pie'>['type'] = 'pie';
  public pieChartData?: ChartConfiguration<'pie'>['data'];
  public pieChartOptions?: ChartConfiguration<'pie'>['options'];

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.pieChartData = this.getDefaultChartData();
    this.pieChartOptions = this.getDefaultChartOptions();

    this.chart?.render();
  }

  public getDefaultChartData(): ChartConfiguration<'pie'>['data'] {
    return {
      labels: [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'],
      datasets: [{
        data: [300, 500, 100]
      }]
    };
  }

  public getDefaultChartOptions(): ChartConfiguration<'pie'>['options'] {
    return {
      responsive: true,
      cutout: '50%',
      plugins: {
        legend: {
          position: 'right'
        },
        title: {
          display: true,
          text: 'Delivery Reports'
        }
      }
    }
  }
}
