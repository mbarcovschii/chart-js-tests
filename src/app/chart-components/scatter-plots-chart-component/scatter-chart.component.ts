import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Plugin } from 'chart.js';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterPlotsChartComponentComponent implements OnInit {

  public scatterChartType: ChartConfiguration<'scatter'>['type'];
  public scatterChartData: ChartConfiguration<'scatter'>['data'];
  public scatterChartOptions: ChartConfiguration<'scatter'>['options'];
  public scatterChartPlugins: Plugin<'scatter'>[];
  public scatterChartLegend: boolean;
  public scatterChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  constructor() {
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
    this.scatterChartPlugins = [];
    this.scatterChartLegend = true;
  }

  ngOnInit(): void {
  }
}
