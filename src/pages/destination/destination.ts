import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService, MarkerType } from '../../app/map.service';
import { ParticipantsService } from '../../app/participants.service';

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html'
})
export class DestinationPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(
    public navCtrl: NavController, 
    @Inject(MapService) public mapService: MapService,
    @Inject(ParticipantsService) public participantsService: ParticipantsService
  ) { }

  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
  }
 
  loadMap(){ 
    this.mapService.initialize(this.mapElement);
  }

  showDestination() {
    let address = this.participantsService.getDestination();
    this.mapService.markAddress(address, MarkerType.Destination);
  }

}
