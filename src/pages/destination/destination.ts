import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapService, MarkerType } from '../../app/map.service';
import { ParticipantsService } from '../../app/participants.service';
import { Entity } from '../../app/entity';

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
    let entity = this.participantsService.destination;
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

  saveDestination() {
    this.participantsService.destination = new Entity({ name: this.name, address: this.address });
    this.showDestination();
  }

  showDestination() {
    let destination = this.participantsService.destination;
    this.mapService.markAddress(destination, MarkerType.Destination);
  }

}
