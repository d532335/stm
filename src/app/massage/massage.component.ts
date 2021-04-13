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
    "<b>Swedish Massage</b><span>- A relaxing, gentle massage to nourish the body and relieve stress</span>",
    "<a class='stm-hyperlinks' href='/maternity'>Table for Two Maternity Massage</a><span>- Relieves the discomforts of pregnancy, such as edema and lethargy, and prepares the body for an easier delivery and faster recovery</span>",
    "<b>Custom Therapeutic Session</b><span>- Any combination of deep tissue, neuromuscular or <a class='stm-hyperlinks' href='/cupping'>cupping</a> designed to address muscle tension and restoring range of motion.</span>"
  ];

  otherTypesHeader: string = "Other Massage & Bodywork Services";
  otherTypes: string[] = [
    "<b>Headache Session: </b><span> A head and neck session that focuses on relaxing the tightened muscles that cause many tension-related headaches - 15-20 minutes $20</span>",
    "<b>Sinus Massage: </b><span> Combat sinus pain and pressure without drugs! This sessions helps provide relief from congestion and swelling by massaging the face and neck in specific pressure points to open sinuses and allow for drainage - 15 minutes $20</span>",
    "<b>Hands and Feet Session: </b><span> Pampers hands and feet with a combination of reflexology, stretching and stimulating massage techniques. Great for anyone who  may suffer from carpal tunnel, arthritis or other wrist and ankle problems - 20-25 minutes $25</span>"
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
