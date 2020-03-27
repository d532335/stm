import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stm-cupping',
  templateUrl: './cupping.component.html',
  styleUrls: ['./cupping.component.scss']
})
export class CuppingComponent implements OnInit {

  benefitsHeader: string = "Key Benefits.";

  benefits: string[] = [
    "Releasing tight, contracted muscle tissue.",
    "Pain reduction.",
    "Joint mobilization.",
    "Lymphatic drainage.",
    "Detoxification- Movement on stagnant tissue.",
    "Scar reduction.",
    "Cellulite reduction.",
    "Skin toning and firming.",
    "Athletic performance enhancement.",
    "Contouring, lifting & drainage of face & body."
  ];

  constructor() { }

  ngOnInit() {
  }

}
