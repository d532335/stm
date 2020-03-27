import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'stm-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(public globals: Globals) { 
    
  }

  ngOnInit() {
  }

}
