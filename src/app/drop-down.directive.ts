import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[stmDropDown]",
  exportAs: "stmDropDown"
})
export class DropDownDirective {
  @HostBinding("class.open") isOpen = false;

  constructor() {}

  @HostListener("click") toggleopen() {
    this.isOpen = !this.isOpen;
    console.log("dropdown open: " + (this.isOpen ? "true" : "false"));
  }
}
