import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

import { NgChartsModule } from 'ng2-charts';

import { MainPageComponent } from './main-page/main-page.component';
import { LineChartComponent } from './chart-components/line-chart/line-chart.component';
import { BarChartComponent } from './chart-components/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './chart-components/scatter-chart/scatter-chart.component';
import { DoughnutChartComponent } from './chart-components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './chart-components/radar-chart/radar-chart.component';
import { PieChartComponent } from './chart-components/pie-chart/pie-chart.component';
import { PolarChartComponent } from './chart-components/polar-chart/polar-chart.component';
import { BubbleChartComponent } from './chart-components/bubble-chart/bubble-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPieChartComponent } from './dashboard/dashboard-pie-chart/dashboard-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterChartComponent,
    BarChartComponent,
    MainPageComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    PolarChartComponent,
    BubbleChartComponent,
    DashboardComponent,
    DashboardPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatDividerModule,
    DragDropModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
