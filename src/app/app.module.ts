import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicSideMenuModule } from 'ionic-side-menu';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicSideMenuModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SplashScreen,
    StatusBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
