import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { FormControl, Validators } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {ErrorStateMatcher} from '@angular/material/core';
//import { google } from '@agm/core/services/google-maps-types';
//import { google } from '@agm/core/services/google-maps-types';

interface IDirection { 
  origin: IPosition,
  destination: IPosition
} 

interface IPosition { 
  lat: number,
  lng: number
}


@Component({
  selector: 'stm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, ErrorStateMatcher {

  public stmLatitude: number = 35.310159;
  public stmLongitude: number = -81.494193;
  public startLatitude: number; // = 35.252351;
  public startLongitude: number; // = -81.428494;
  public searchControl: FormControl;
  public zoom: number = 14;
  
  public direction: IDirection;

  public showDirections: boolean = false;
  public invalidAddress: boolean = false;

  readonly invalidAddressMessage = {
    'invalidAddress': {
      'message': 'Invalid Address',
    }
  };

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, //private ngZone: NgZone,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon('search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_search_black_24px.svg'));
    }

  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    
    //create search FormControl
    this.searchControl = new FormControl('', [
      Validators.required
    ]);
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

 //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
 //       types: ["address"]
 //     });
/* 
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          console.log("invalid address - " + this.invalidAddress);
          this.showDirections = false;
          //get the place result
          //let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          let place = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            this.invalidAddress = true;
            
            this.searchControl.setErrors(this.invalidAddressMessage);
      
            console.log("invalid address - " + this.invalidAddress);
            return;
          }
          console.log("invalid address - " + this.invalidAddress);
          //set latitude, longitude and zoom
          this.startLatitude = place.geometry.location.lat();
          this.startLongitude = place.geometry.location.lng();
          this.zoom = 12;

          this.direction = {
            origin: { lat: this.startLatitude, lng: this.startLongitude },
            destination: { lat: this.stmLatitude, lng: this.stmLongitude }
          }
          
          this.invalidAddress = false;
          this.showDirections = true;
          this.searchControl.setErrors(null);
          console.log("invalid address - " + this.invalidAddress);
        });
      }); */
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.startLatitude = position.coords.latitude;
        this.startLongitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  // goMobile() {
    
  //   var destination = companyProps.address + ' ' + 
  //               companyProps.city + ' ' + companyProps.state + ' ' + companyProps.zipcode;
            
  //           if (_.indexOf(['ipad', 'iphone', 'ipod'], deviceDetector.device) > -1) {
  //               //var link = ""+"http://maps.apple.com/maps?saddr="+$scope.start+"&daddr="+destination;
  //               var link = ""+"http://maps.apple.com/maps?saddr="+"Current Location"+"&daddr="+destination;
  //               window.open(link, '_blank');
                
                
  //           } else if (_.indexOf(['android'], deviceDetector.device) > -1) {
                
  //               var link = ""+"http://maps.google.com/maps?saddr="+"Current Location"+"&daddr="+destination;
  //               window.open(link, '_blank');
  //           } else {
  //               var link = ""+"index.html#/directions";
  //               window.location=link;
  //           }
  // }
}