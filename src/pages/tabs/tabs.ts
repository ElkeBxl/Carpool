import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MapPage } from '../map/map';
import { DestinationPage } from '../destination/destination';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = DestinationPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
