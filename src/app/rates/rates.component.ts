import { Component, OnInit, Input } from '@angular/core';

export enum ServiceType {
  Traditional = "Traditional",
  Ashiatsu = "Ashiatsu",
  All = "All"
}

class Type {
  constructor(public type: ServiceType) {}
}

interface IRates { 
  type: string,
  name: string,
  price: string,
  link: string
} 

@Component({
  selector: 'stm-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss']
})
export class RatesComponent implements OnInit {
  serviceType = ServiceType;
  service: Type;

  massageRates: IRates[] = [
      {"type": "Traditional", "name": "- 30 minutes", "price":"$35", "link":"massage"},
      {"type": "Traditional", "name": "- 1 hour", "price":"$60", "link":"massage"},
      {"type": "Traditional", "name": "- 90 minutes", "price":"$85", "link":"massage"}
  ];

  ashiatsuRates: IRates[] = [
      {"type": "Ashiatsu", "name": "- 1 hour", "price":"$75", "link":"ashiatsu"},
      {"type": "Ashiatsu", "name": "- 90 minutes", "price":"$100", "link":"ashiatsu"},
  ];

  constructor() { 
    this.service = new Type(ServiceType.All);
  }

  ngOnInit() {
  }

  get type(): ServiceType {
    return this.service.type;
  }

  @Input('type') set type(newType: ServiceType) {
      this.service.type = newType;
  }
}
