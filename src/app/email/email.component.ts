import { Component, OnInit, Input} from '@angular/core';
import { Globals } from '../globals';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'stm-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input('content') anchorContent: string;

  mailtoStr: SafeHtml ;

  constructor(public globals: Globals, private sanitizer: DomSanitizer) {
    this.anchorContent = this.globals.email;
  }

  ngOnInit() {
    
  }

  sanitizedEmailUrl(){
    return this.sanitizer.bypassSecurityTrustUrl("mailto:" + this.globals.email);
  }

  public get content() {
    return (this.anchorContent);
  }

  public set content(value) {
    this.anchorContent = value;
  }
}
