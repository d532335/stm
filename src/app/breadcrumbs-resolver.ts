import { Injectable } from "@angular/core";
//import { ActivatedRouteSnapshot } from "@angular/router";
//import { McBreadcrumbsResolver, IBreadcrumb } from 'ngx-breadcrumbs';
import * as _ from "lodash";

@Injectable()
export class BreadcrumbsResolver {
  //extends McBreadcrumbsResolver {
  //static readonly START_CRUMB: IBreadcrumb = {text: "Home", path: "/home"};
  //static crumbs: IBreadcrumb[] = [ BreadcrumbsResolver.START_CRUMB ];
  //   resolve(route: ActivatedRouteSnapshot) {
  //     if (route.data.crumb == "Home") {
  //       // when they navigate back home.  start from home but return empty array so not displayed on Home
  //       //BreadcrumbsResolver.crumbs = [BreadcrumbsResolver.START_CRUMB];
  //       return [];
  //     }
  //     let newCrumb = this.dropCrumb(route);
  //     let crumIndex = this.getBreadCrumbIndex(newCrumb);
  //     if (crumIndex > -1) {
  //       // crumb already exists.  pick up the crumbs back to this one
  //       this.pickupCrumbs(crumIndex);
  //     } else {
  //       //BreadcrumbsResolver.crumbs.push(newCrumb);
  //     }
  //     //return BreadcrumbsResolver.crumbs;
  //   }
  //   private dropCrumb(route: ActivatedRouteSnapshot): IBreadcrumb {
  //     return { text: route.data.crumb, path: route.routeConfig.path };
  //   }
  //   private getBreadCrumbIndex(crumb: IBreadcrumb): number {
  //     return _.findIndex(BreadcrumbsResolver.crumbs, function(c) {
  //       return c.text == crumb.text;
  //     });
  //   }
  //   private pickupCrumbs(index: number) {
  //     BreadcrumbsResolver.crumbs = _.slice(
  //       BreadcrumbsResolver.crumbs,
  //       0,
  //       index + 1
  //     );
  //   }
}
