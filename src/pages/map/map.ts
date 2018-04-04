import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';
import { MapService, MarkerType } from '../../app/map.service';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
 
  constructor(
    public navCtrl: NavController,
    @Inject(ParticipantsService) public participantsService: ParticipantsService,
    @Inject(MapService) public mapService: MapService
  ) { }
 
  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
    this.showOrigin();
    this.showParticipants();
  }
 
  loadMap(){ 
    this.mapService.initialize(this.mapElement);
  }

  showDestination() {
    let destination = this.participantsService.getDestination();
    this.mapService.markAddress(destination, MarkerType.Destination);
  }

  showOrigin() {
    let origin = this.participantsService.getOrigin();
    this.mapService.markAddress(origin, MarkerType.Origin);
  }

  showParticipants() {
    this.participantsService.getParticipants().forEach((participant, index) => {
      if (participant.address) {
        this.mapService.markAddress(participant, MarkerType.Participant);
      }
    });
  }

  showRoute() {
    this.mapService.clearMarkers();
    this.mapService.markRoute();
  }
  
}
