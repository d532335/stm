import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "stm-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit, AfterViewInit {
  public isNavOpen = false;
  public isClicked = false;
  _el: any;
  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit() {}

  toggleNavbar() {
    this.isNavOpen = !this.isNavOpen;

    console.log("Nav open: " + (this.isNavOpen ? "true" : "false"));
  }

  closeNavbarIfOpen() {
    if (this.isNavOpen) {
      this.toggleNavbar();
    }

    // else do nothing
  }
}
