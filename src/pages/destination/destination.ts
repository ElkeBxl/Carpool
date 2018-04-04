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

  address: string = "";

  name: string = "";

  constructor(
    public navCtrl: NavController, 
    @Inject(MapService) public mapService: MapService,
    @Inject(ParticipantsService) public participantsService: ParticipantsService
  ) { 
    let entity = this.participantsService.getDestination();
    this.name = entity.name;
    this.address = entity.address;
  }

  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
  }
 
  loadMap(){ 
    this.mapService.initialize(this.mapElement);
  }

  showDestination() {
    let destination = this.participantsService.getDestination();
    this.mapService.markAddress(destination, MarkerType.Destination);
  }

}
