import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public scatterChartType: ChartConfiguration<'scatter'>['type'] = 'scatter';
  public scatterChartData?: ChartConfiguration<'scatter'>['data'];
  public scatterChartOptions?: ChartConfiguration<'scatter'>['options'];
  public scatterChartLegend?: boolean;
  public scatterChartLabels?: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.scatterChartType = 'scatter';
    this.scatterChartData = {
      labels: this.scatterChartLabels,
      datasets: [
        {
          data: [
            { x: 1, y: 1 },
            { x: 2, y: 3 },
            { x: 3, y: -2 },
            { x: 4, y: 4 },
            { x: 5, y: -3 },
          ],
          label: 'Series A',
          pointRadius: 10,
        },
      ]
    };
    this.scatterChartOptions = {
      responsive: true,
    };
    this.scatterChartLegend = true;
    this.chart?.render();
  }
}
