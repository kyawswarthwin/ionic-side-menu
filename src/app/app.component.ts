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
      }),
      menus: [
        {
          items: [
            {
              icon: 'person',
              label: 'Profile',
              handler: () => {
                alert('Profile clicked.');
              }
            },
            {
              icon: 'settings',
              label: 'Settings',
              handler: () => {
                alert('Settings clicked.');
              }
            }
          ]
        },
        {
          type: 'divider'
        },
        {
          items: [
            {
              icon: 'exit',
              label: 'Logout',
              handler: () => {
                alert('Logout clicked.');
              }
            }
          ]
        }
      ]
    },
    menus: [
      {
        items: [
          {
            icon: 'home',
            label: 'Home',
            url: '/home'
          },
          {
            icon: 'list',
            label: 'Frameworks',
            badge: of({
              text: '2',
              color: 'danger'
            }),
            url: '/frameworks',
            children: [
              {
                icon: 'logo-ionic',
                label: 'Ionic',
                url: '/frameworks/ionic'
              },
              {
                icon: 'logo-angular',
                label: 'Angular',
                url: '/frameworks/angular'
              }
            ]
          },
          {
            icon: 'information-circle',
            label: 'About',
            url: '/about'
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
