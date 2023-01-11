import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public radarChartType: ChartConfiguration<'radar'>['type'] = 'radar';
  public radarChartData?: ChartConfiguration<'radar'>['data'];
  public radarChartOptions?: ChartConfiguration<'radar'>['options'];
  public radarChartLegend?: boolean;
  public radarChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  constructor() {
  }

  ngOnInit(): void {
    Chart.register(Annotation);
    this.renderChart();
  }

  public renderChart(): void {
    this.radarChartData = {
      labels: this.radarChartLabels,
      datasets: [
        { data: [ 65, 59, 90, 81, 56, 55, 40 ], label: 'Series A' },
        { data: [ 28, 48, 40, 19, 96, 27, 100 ], label: 'Series B' }
      ]
    };

    this.radarChartOptions = {
      responsive: true
    };

    this.chart?.render();
  }
}
