import { Component, OnInit } from "@angular/core";
//import { DeviceDetectorService } from 'ngx-device-detector';
import { Globals } from "../globals";

@Component({
  selector: "stm-telephone",
  templateUrl: "./telephone.component.html",
  styleUrls: ["./telephone.component.scss"]
})
export class TelephoneComponent implements OnInit {
  constructor(
    public globals: Globals //private deviceService: DeviceDetectorService
  ) {
    //telephoneSupported = detectUtils.isMobile();
  }

  ngOnInit() {}

  isMobile(): boolean {
    //return this.deviceService.isMobile();

    return false;
  }
}
