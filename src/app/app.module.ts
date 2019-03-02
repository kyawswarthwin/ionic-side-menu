import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicSideMenuModule } from 'ionic-side-menu';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicSideMenuModule],
  declarations: [AppComponent],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SplashScreen,
    StatusBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
