import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'stm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public globals: Globals) { 

  }

  ngOnInit() {
  }

}
