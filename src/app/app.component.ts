import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SideMenuOptions } from 'ionic-side-menu';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: SideMenuOptions = {
    header: {
      background: 'assets/img/side-menu-bg.jpg',
      profile: of({
        picture: 'assets/img/avatar.png',
        name: 'John Doe',
        email: 'johndoe@gmail.com'
      })
    },
    menus: [
      {
        items: [
          {
            icon: 'home',
            title: 'Home',
            url: '/home'
          },
          {
            icon: 'list',
            title: 'Frameworks',
            badge: of({
              text: '2',
              color: 'danger'
            }),
            url: '/frameworks',
            children: [
              {
                icon: 'logo-ionic',
                title: 'Ionic',
                url: '/frameworks/ionic'
              },
              {
                icon: 'logo-angular',
                title: 'Angular',
                url: '/frameworks/angular'
              }
            ]
          },
          {
            icon: 'information-circle',
            title: 'About',
            url: '/about'
          }
        ]
      },
      {
        divider: true
      },
      {
        header: 'Account',
        items: [
          {
            icon: 'exit',
            title: 'Logout',
            handler: () => {
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
