import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './main-page/main-page.component';

import { NgChartsModule } from 'ng2-charts';

import { LineChartComponent } from './chart-components/line-chart/line-chart.component';
import { BarChartComponent } from './chart-components/bar-chart/bar-chart.component';
import { ScatterChartComponent } from './chart-components/scatter-chart/scatter-chart.component';
import { DoughnutChartComponent } from './chart-components/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './chart-components/radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterChartComponent,
    BarChartComponent,
    MainPageComponent,
    LineChartComponent,
    DoughnutChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
