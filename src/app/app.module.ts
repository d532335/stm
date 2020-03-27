// Foundational Modules
import { NgModule } from "@angular/core";

// Angular support Modules
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // required for ngModel
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

// Angular Material Modules
//import { MatComponentModule } from './mat-component.module';
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

// 3rd party Modules
//import { CustomFormsModule } from 'ng2-validation';
//import { DeviceDetectorModule } from "ngx-device-detector";
//import { McBreadcrumbsModule } from "ngx-breadcrumbs";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";

// Bootstrap Modules
// import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
//import { AccordionModule } from "ngx-bootstrap/accordion";
//import { BsDropdownModule } from "ngx-bootstrap/dropdown";
//import { CarouselModule } from "ngx-bootstrap/carousel";
//import { CollapseModule } from "ngx-bootstrap/collapse";

// My Components
import { Globals } from "./globals";
import { BreadcrumbsResolver } from "./breadcrumbs-resolver";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
//import { MassageComponent } from './massage/massage.component';
import { MaternityComponent } from "./maternity/maternity.component";
import { FooterComponent } from "./footer/footer.component";
import { EmailComponent } from "./email/email.component";
import { AddressComponent } from "./address/address.component";
import { TelephoneComponent } from "./telephone/telephone.component";
import { CreditsComponent } from "./credits/credits.component";
import { HeaderComponent } from "./header/header.component";
import { CarouselComponent } from "./carousel/carousel.component";
import {
  IntakeformComponent,
  IntakeFormDialogComponent
} from "./intakeform/intakeform.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { MassageComponent } from "./massage/massage.component";
import { InfoListComponent } from "./info-list/info-list.component";
import { EscapeHtmlPipe } from "./escape-html.pipe";
//import { HtmlOutletDirective } from './html-outlet.directive.ts.old';
import { RatesComponent } from "./rates/rates.component";
import { AshiatsuComponent } from "./ashiatsu/ashiatsu.component";
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { CuppingComponent } from "./cupping/cupping.component";
import { ServicesMenuComponent } from "./services-menu/services-menu.component";
import { MassageFaqsComponent } from "./massage-faqs/massage-faqs.component";
import { ContactInfoComponent } from "./contact-info/contact-info.component";
import { AboutComponent } from "./about/about.component";
import { DirectionsComponent } from "./directions/directions.component";
import { MapComponent } from "./map/map.component";

const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Home" }
  },
  {
    path: "home",
    component: HomeComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Home" }
  },
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  {
    path: "menu",
    component: ServicesMenuComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Menu" }
  },
  {
    path: "massage",
    component: MassageComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Massage" }
  },
  {
    path: "maternity",
    component: MaternityComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Maternity" }
  },
  {
    path: "ashiatsu",
    component: AshiatsuComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Ashiatsu" }
  },
  {
    path: "cupping",
    component: CuppingComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Cupping" }
  },
  {
    path: "faqs",
    component: MassageFaqsComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "FAQs" }
  },
  {
    path: "contact",
    component: ContactInfoComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Contact Me" }
  },
  {
    path: "about",
    component: AboutComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "About Me" }
  },
  {
    path: "directions",
    component: DirectionsComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Directions" }
  },
  { path: "testimonial", component: TestimonialComponent },
  {
    path: "**",
    component: HomeComponent,
    data: { breadcrumbs: BreadcrumbsResolver, crumb: "Home" }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MassageComponent,
    MaternityComponent,
    FooterComponent,
    EmailComponent,
    AddressComponent,
    TelephoneComponent,
    CreditsComponent,
    HeaderComponent,
    CarouselComponent,
    IntakeformComponent,
    IntakeFormDialogComponent,
    FaqsComponent,
    InfoListComponent,
    EscapeHtmlPipe,
    RatesComponent,
    AshiatsuComponent,
    TestimonialComponent,
    CuppingComponent,
    ServicesMenuComponent,
    MassageFaqsComponent,
    ContactInfoComponent,
    AboutComponent,
    DirectionsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //AccordionModule.forRoot(), // for bootstrap
    //CollapseModule.forRoot(), // for bootstrap
    //CarouselModule.forRoot(), // for bootstrap
    //BsDropdownModule.forRoot(), // for bootstrap
    //DeviceDetectorModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAai5QrYRL6HgJo_srO_-G58digFgqWRDU",
      libraries: ["places"]
    }),
    AgmDirectionModule,
    RouterModule.forRoot(appRoutes)
    //McBreadcrumbsModule.forRoot()
  ],
  entryComponents: [IntakeformComponent, IntakeFormDialogComponent],
  providers: [Globals, BreadcrumbsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
