import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SideMenuOptions } from 'ionic-side-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: SideMenuOptions = {
    header: {
      background: 'assets/img/side-menu-bg.jpg',
      profile: {
        picture: 'assets/img/avatar.png',
        name: 'John Doe',
        email: 'johndoe@gmail.com'
      },
      onClick: () => {
        alert('header clicked');
      }
    },
    menus: [
      {
        items: [
          {
            icon: 'home',
            title: 'Home',
            badge: '3',
            badgeColor: 'danger',
            path: '/home'
          },
          {
            icon: 'information-circle',
            title: 'About',
            path: '/about'
          }
        ]
      },
      {
        isDivider: true
      },
      {
        header: 'Account',
        items: [
          {
            icon: 'exit',
            title: 'Logout',
            onClick: () => {
              alert('logout clicked');
            }
          }
        ]
      }
    ]
  };

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#3171e0');
      this.splashScreen.hide();
    });
  }
}
