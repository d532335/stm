import { Component, OnInit, Input} from '@angular/core';
import * as _ from "lodash";

export interface IFAQItem { 
  id: number,
  title: string,
  content: string
} 


@Component({
  selector: 'stm-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  
  @Input('items') items: IFAQItem[];

  constructor() { }

  ngOnInit() {
  }

  needsDynamicCompiled(item: string): boolean {
    return (_.includes(item, "routerLink")); 
  }

}
