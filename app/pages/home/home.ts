import {Component} from '@angular/core';
import {Page, NavController, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, Geolocation } from 'ionic-native';
import { SearchPage } from '../search/search';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  map:any;
  constructor(public navCtrl: NavController, private platform: Platform) {
    this.platform = platform;
    this.initializeMap();

  }

  initializeMap(){

    this.platform.ready().then(() => {
      var minZoomLevel = 12;

      //Installed the typings using typings install dt~google-maps --global
      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(38.50, -90.50),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: 'all',
            stylers: [
              { saturation: -80 }
            ]
          },{
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              { hue: '#00ffee' },
              { saturation: 50 }
            ]
          },{
            featureType: 'poi.business',
            elementType: 'labels',
            stylers: [
              { visibility: 'off' }
            ]
          }
        ]
      });
    });
  }

}
