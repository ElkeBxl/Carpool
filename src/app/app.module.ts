import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ParticipantsPage } from '../pages/participants/participants';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { DestinationPage } from '../pages/destination/destination';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ParticipantsService } from './participants.service';
import { MapService } from './map.service';
import { EditParticipantPage } from '../pages/edit-participant/edit-participant';

@NgModule({
  declarations: [
    MyApp,
    DestinationPage,
    ParticipantsPage,
    EditParticipantPage,
    MapPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DestinationPage,
    ParticipantsPage,
    EditParticipantPage,
    MapPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ParticipantsService,
    MapService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
