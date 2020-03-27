import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';


@Component({
  selector: 'stm-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent implements OnInit {

  constructor(public globals: Globals) { 

  }

  ngOnInit() {
  }

}
