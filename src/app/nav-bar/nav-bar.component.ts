import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: "stm-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavBarComponent implements OnInit, AfterViewInit {
  public isNavOpen = false;
  public isClicked = false;
  //_el: any;
  
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log( 'Matches small viewport or handset in portrait mode');
          this.closeNavbarIfOpen();
        } else {
          console.log( 'some other breakpoint');
        }
      });
  }

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
