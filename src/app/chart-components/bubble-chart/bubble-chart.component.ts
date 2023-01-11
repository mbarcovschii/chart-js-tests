import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public bubbleChartType: ChartConfiguration<'bubble'>['type'] = 'bubble';
  public bubbleChartData?: ChartConfiguration<'bubble'>['data'];
  public bubbleChartOptions?: ChartConfiguration<'bubble'>['options'];
  public bubbleChartLegend?: boolean;
  public bubbleChartLabels?: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.bubbleChartData = {
      labels: [],
      datasets: [ {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 26, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 },
        ],
        label: 'Series A',
        backgroundColor: [
          'red',
          'green',
          'blue',
          'purple',
          'yellow',
          'brown',
          'magenta',
          'cyan',
          'orange',
          'pink'
        ],
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
      } ]
    };

    this.bubbleChartOptions = {
      scales: {
        x: {
          min: 0,
          max: 30,
          ticks: {}
        },
        y: {
          min: 0,
          max: 30,
          ticks: {}
        },
      }
    };

    this.bubbleChartLegend = true;

    this.chart?.render();
  }
}
