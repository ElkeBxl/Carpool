import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService, MarkerType } from '../../app/map.service';

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html'
})
export class DestinationPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public mapService: MapService) { }

  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
  }
 
  loadMap(){ 
    this.mapService.initialize(this.mapElement);
  }

  showDestination() {
    this.mapService.markAddress("Ordina Belgium", MarkerType.Destination);
  }

}
