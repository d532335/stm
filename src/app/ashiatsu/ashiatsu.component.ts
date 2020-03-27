import { Component, OnInit } from '@angular/core';
import { ServiceType } from './../rates/rates.component';


@Component({
  selector: 'stm-ashiatsu',
  templateUrl: './ashiatsu.component.html',
  styleUrls: ['./ashiatsu.component.scss']
})
export class AshiatsuComponent implements OnInit {

  serviceType: ServiceType;

  benefitsHeader: string = "Key Benefits.";

  benefits: string[] = [
    "Gravitational force creates a structural change in soft tissue damage.",
    "Lower back pain sufferers report significant pain reduction in three visits.",
    "Improves posture and movement while relieving pain."
  ];

  improveHeader: string = "Who Can Improve?";

  improve: string[] = [
    "Anyone suffering from low back and leg and hip pain that is muscular in nature.",
    "Athletes: runners, bike riders, horseback riders, etc.",
    "Clients who desire a deep, muscular massage."
  ];

  constructor() { 
    this.serviceType = ServiceType.Ashiatsu;
  }

  ngOnInit() {
  }

}
