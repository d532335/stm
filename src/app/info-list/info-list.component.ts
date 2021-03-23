import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import * as _ from "lodash";

@Component({
  selector: 'stm-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

  @Input('header') header: string;
  @Input('items') items: string[];
  
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) { 
    this.matIconRegistry.addSvgIcon(
      "stm-foot",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/image2vector.svg")
      // this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/whitefoot.svg")
      //this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/blackfoot.svg")

    );
  }

  ngOnInit() {
  }

  needsDynamicCompiled(item: string): boolean {
    return (_.includes(item, "routerLink")); 
  }

  sanitizedHtml(item: string){
    return this.domSanitizer.bypassSecurityTrustHtml(item);
  }
}
