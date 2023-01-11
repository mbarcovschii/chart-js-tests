import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public polarChartType: ChartConfiguration<'polarArea'>['type'] = 'polarArea';
  public polarChartData?: ChartConfiguration<'polarArea'>['data'];
  public polarChartOptions?: ChartConfiguration<'polarArea'>['options'];
  public polarChartLegend?: boolean;
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];

  constructor() {
  }

  ngOnInit(): void {
    this.renderChart();
  }

  public renderChart(): void {
    this.polarChartData = {
      labels: this.polarAreaChartLabels,
      datasets: [ {
        data: [ 300, 500, 100, 40, 120 ],
        label: 'Series 1'
      } ]
    };

    this.polarChartLegend = true;

    this.chart?.render();
  }
}
