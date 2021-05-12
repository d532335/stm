import { Component, OnInit } from '@angular/core';
import { ServiceType } from './../rates/rates.component';

@Component({
  selector: 'stm-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements OnInit {
  
  serviceType: ServiceType;

  types: string[] = [
    "<b>Swedish Massage</b>A relaxing, gentle massage to nourish the body and relieve stress",
    "<a class='stm-hyperlinks' href='/maternity'>Table for Two Maternity Massage</a>- Relieves the discomforts of pregnancy, such as edema and lethargy, and prepares the body for an easier delivery and faster recovery",
    "<b>Custom Therapeutic Session</b>- Any combination of deep tissue, neuromuscular or <a class='stm-hyperlinks' href='/cupping'>cupping</a> designed to address muscle tension and restoring range of motion."
  ];

  policies: string[] = [
    "Cancellation policy requires 24-hour prior notice; otherwise full charge is made for the session.",
    "Payment is due for services rendered at time of treatment.",
    "Cash and local checks are accepted.",
    "There is a $25.00 fee for any check returned for insufficient funds or closed accounts."
  ];


  constructor() { 
    this.serviceType = ServiceType.Traditional;
  }


  ngOnInit() {
  }

}
