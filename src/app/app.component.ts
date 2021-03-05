import { Location, PopStateEvent } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'stm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  
  public title = 'Simple Touch Massage';

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    this.location.subscribe((ev:PopStateEvent) => {
        this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev:any) => {
        if (ev instanceof NavigationStart) {
            if (ev.url != this.lastPoppedUrl)
                this.yScrollStack.push(window.scrollY);
        } else if (ev instanceof NavigationEnd) {
            if (ev.url == this.lastPoppedUrl) {
                this.lastPoppedUrl = undefined;
                window.scrollTo(0, this.yScrollStack.pop());
            } else
                window.scrollTo(0, 0);
        }
    });
}

}
