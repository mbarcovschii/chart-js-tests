import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public doughnutChartType: ChartConfiguration<'doughnut'>['type'] = 'doughnut';
  public doughnutChartData?: ChartConfiguration<'doughnut'>['data'];
  public doughnutChartOptions?: ChartConfiguration<'doughnut'>['options'];
  public doughnutChartLegend?: boolean;
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  constructor() {
  }

  ngOnInit(): void {
    Chart.register(Annotation);
    this.renderChart();
  }

  public renderChart(): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: [ 350, 450, 100 ] },
        { data: [ 50, 150, 120 ] },
        { data: [ 250, 130, 70 ] }
      ]
    };

    this.chart?.render();
  }
}
