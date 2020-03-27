import { Component, OnInit, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'stm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  activeSlideIndex: number = 0;

  constructor(private cdr:  ChangeDetectorRef) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.activeSlideIndex = _.random(0, 2, false);
    this.cdr.detectChanges();
  }
}
