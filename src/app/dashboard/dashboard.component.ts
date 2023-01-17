import { Component, OnInit, QueryList, ViewChild, ElementRef } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { DashboardPieChartComponent } from './dashboard-pie-chart/dashboard-pie-chart.component';
import { CdkDrag, CdkDragStart, CdkDropList, CdkDropListGroup, CdkDragMove, CdkDragEnter, CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ViewportRuler } from "@angular/cdk/overlay";
import { ResizeEvent } from 'angular-resizable-element';

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

  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
