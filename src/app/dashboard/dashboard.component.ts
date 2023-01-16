import { Component, OnInit, QueryList, ViewChild, ElementRef } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DashboardPieChartComponent } from './dashboard-pie-chart/dashboard-pie-chart.component';
import { CdkDrag, CdkDragStart, CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter, CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ViewportRuler } from "@angular/cdk/overlay";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('resizeHandle') resizeHandle?: ElementRef;

  public numberArray: number[] = [1, 2, 3];

  public isResizing: boolean = false;
  public startX: number = 0;
  public startY: number = 0;
  public originalWidth: number = 0;
  public originalHeight: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  public renderCharts(): void {
  }

  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.numberArray, event.previousIndex, event.currentIndex);
  }
}
