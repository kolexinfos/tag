import {Component, ViewChild } from '@angular/core';
import {Platform, ionicBootstrap, MenuController, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {TutorialPage} from './pages/tutorial/tutorial';
import { TabsPage } from './pages/tabs/tabs';



interface PageObj {
  title: string;
  component: any;
  icon: string;
  index?: number;
}

@Component({
  templateUrl: 'build/app.html'
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  // set our app's pages
  pages : PageObj[] = [
    { title: 'Home', component: HomePage, icon: 'contacts' },
    { title: 'Profile', component: HomePage, icon: 'person', index:1 },
    { title: 'Search Routes', component: HomePage, icon: 'information-circle', index:2 },
    { title: 'Messages', component: HomePage, icon: 'information-circle', index:3 },
    { title: 'Dashboard', component: HomePage, icon: 'ion-pie-graph', index:2 },
    { title: 'Reviews/Comments', component: HomePage, icon: 'information-circle', index:4 },
];

  loggedInPages: PageObj[] = [
    { title: 'Account', component: HomePage, icon: 'person' },
    { title: 'Logout', component: HomePage, icon: 'log-out' }
  ];
  loggedOutPages: PageObj[] = [
    { title: 'Login', component: HomePage, icon: 'log-in' },
    { title: 'Signup', component: HomePage, icon: 'person-add' }
  ];

  constructor( public platform: Platform, public menu: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: PageObj) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});

    } else {
      this.nav.setRoot(page.component);
    }
  }
}

ionicBootstrap(MyApp);
