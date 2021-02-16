import { Component, OnInit } from "@angular/core";

@Component({
  selector: "stm-gift-certificate",
  templateUrl: "./gift-certificate.component.html",
  styleUrls: ["./gift-certificate.component.scss"]
})
export class GiftCertificateComponent implements OnInit {
  firstLoad = true;
  constructor() {}

  ngOnInit(): void {
    if (this.firstLoad) {
      window.scroll(0, -20);
      this.firstLoad = false;
    }
  }
}
