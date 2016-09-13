import {Component} from '@angular/core';
import {Page, NavController, Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, Geolocation } from 'ionic-native';
import { SearchPage } from '../search/search';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  map: GoogleMap;
  lat: number;
  long: number;

  constructor(public navCtrl: NavController, private platform: Platform) {
    platform.ready().then(() => {

      //this.loadMap();
    });
  }

  gotoSearch(){
    this.navCtrl.push(SearchPage);
  }

  loadMap(){
    let location = new GoogleMapsLatLng(-34.9290,138.6010);
    //-34.9290,138.6010

    this.map = new GoogleMap('map', {
      'backgroundColor': 'white',
      'controls': {
        'compass': true,
        'myLocationButton': true,
        'indoorPicker': true,
        'zoom': true
      },
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      },
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
      console.log('Map is ready!');


      console.log(this.lat + ' ' + this.long);

      Geolocation.getCurrentPosition().then(pos => {
        console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
        this.lat = pos.coords.latitude;
        this.long = pos.coords.longitude;

        let coord = new GoogleMapsLatLng(this.lat, this.long);
        this.map.setCenter(coord);

        //this.map.animateCamera({
        //  'target': coord,
        //  'tilt': 60,
        //  'zoom': 18,
        //  'bearing': 140
        //});

        this.map.addMarker({
          'position':coord,
          'title': "The TagOn Project HeadQuarters"}).then(marker => {
          marker.addEventListener(GoogleMapsEvent.INFO_CLICK).subscribe(() => {
            console.log("Info window was clicked");
          });
        });
      });
    });

  }
}
