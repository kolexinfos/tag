import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import {TabsPage} from '../tabs/tabs';


interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  templateUrl: 'build/pages/tutorial/tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.slides = [
      {
        title: 'Welcome to <b>TAG</b>',
        description: 'The <b>TAG App</b> is a crowd sourcing platform to enable users share rides, crowd source delivery and blah blah blah TODO.',
        image: 'img/ica-slidebox-img-1.png',
      },
      {
        title: 'What is TAG?',
        description: '<b>TAG Platform</b> is a crowd sourcing platform to solve problems of transportation, delivery of items in Nigeria.',
        image: 'img/ica-slidebox-img-2.png',
      },
      {
        title: 'How does this work?',
        description: 'The <b>TAG Platform</b> is also a cloud platform for sharing, managing and scaling major logistics business processes .',
        image: 'img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    //this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
