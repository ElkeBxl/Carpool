import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';
import { Participant } from '../../app/participant';
import { MapService, MarkerType } from '../../app/map.service';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  private map: any;
 
  constructor(
    public navCtrl: NavController,
    @Inject(ParticipantsService) public participantsService: ParticipantsService,
    @Inject(MapService) public mapService: MapService
  ) { }
 
  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
    this.showParticipants();
  }
 
  loadMap(){ 
    this.mapService.initialize(this.mapElement);
  }

  showDestination() {
    this.mapService.markAddress("Ordina Belgium", MarkerType.Destination);
  }

  showParticipants() {
    this.participantsService.getParticipants().forEach((participant, index) => {
      if (participant.address) {
        this.mapService.markAddress(participant.address, MarkerType.Participant);
      }
    });
  }
  
}
