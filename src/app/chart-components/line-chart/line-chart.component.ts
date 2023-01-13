import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  public lineChartType: ChartConfiguration<'line'>['type'] = 'line';
  public lineChartData?: ChartConfiguration<'line'>['data'];
  public lineChartOptions?: ChartConfiguration<'line'>['options'];
  public lineChartLegend?: boolean;
  public lineChartLabels?: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  constructor() {
  }

  ngOnInit(): void {
    Chart.register(Annotation);
    this.renderChart();
  }

  public renderChart(): void {
    this.lineChartType = 'line';

    this.lineChartData = {
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
        {
          data: [28, 48, 40, 19, 86, 27, 90],
          label: 'Series B',
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          fill: 'origin',
        },
        {
          data: [180, 480, 770, 90, 1000, 270, 400],
          label: 'Series C',
          yAxisID: 'y1',
          backgroundColor: 'rgba(255,0,0,0.3)',
          borderColor: 'red',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        }
      ],
      labels: this.lineChartLabels
    };

    this.lineChartOptions = {
      elements: {
        line: {
          tension: 0.5
        }
      },
      scales: {
        y: {
          position: 'left'
        },
        y1: {
          position: 'right',
          grid: {
            color: 'rgba(255,0,0,0.3)'
          },
          ticks: {
            color: 'red'
          }
        }
      },
      plugins: {
        legend: { display: true },
        annotation: {
          annotations: [
            {
              type: 'line',
              scaleID: 'x',
              value: 'March',
              borderColor: 'orange',
              borderWidth: 2,
              label: {
                display: true,
                position: 'center',
                color: 'orange',
                content: 'LineAnno',
                font: {
                  weight: 'bold'
                }
              }
            },
          ],
        }
      }
    };

    this.lineChartLegend = true;

    this.chart?.render();
  }

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public randomize(): void {
    if (this.lineChartData) {
      for (let i = 0; i < this.lineChartData.datasets.length; i++) {
        for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
          this.lineChartData.datasets[i].data[j] = LineChartComponent.generateNumber(i);
        }
      }
      this.chart?.update();
    }
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    if (this.lineChartData) {
      this.lineChartData.datasets.forEach((x, i) => {
        const num = LineChartComponent.generateNumber(i);
        x.data.push(num);
      });
      this.lineChartData?.labels?.push(`Label ${this.lineChartData.labels.length}`);

      this.chart?.update();
    }
  }

  public changeColor(): void {
    if (this.lineChartData) {
      for (let i = 0; i < this.lineChartData.datasets.length; i++) {
        let o = Math.round;
        let r = Math.random; 
        let s = 255;
        this.lineChartData.datasets[i].borderColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.5' + ')';
        this.lineChartData.datasets[i].backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + '0.5' + ')';
      }

      this.chart?.update();
    }
  }

  public changeFilling(): void {
    if (this.lineChartData) {
      for (let i = 0; i < this.lineChartData.datasets.length; i++) {
        let backgroundColor = this.lineChartData.datasets[i].backgroundColor;
        let backgroundColorParts = (backgroundColor as string).replaceAll(/[^\d.,]/g, "").split(",");
        let opacity = backgroundColorParts[3] === '0' ? '0.5' : '0'; 
        this.lineChartData.datasets[i].backgroundColor = 'rgba(' + backgroundColorParts[0] + ',' + backgroundColorParts[1] + ',' + backgroundColorParts[2] + ',' + opacity + ')';
      }

      this.chart?.update();
    }
  }
}
