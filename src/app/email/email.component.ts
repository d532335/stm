import { Component, OnInit, Input} from '@angular/core';
import { Globals } from '../globals';

@Component({
  selector: 'stm-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input('content') anchorContent: string;

  constructor(public globals: Globals) {
    this.anchorContent = this.globals.email;
  }

  ngOnInit() {
    
  }

  public get content() {
    return (this.anchorContent);
  }

  public set content(value) {
    this.anchorContent = value;
  }
}
