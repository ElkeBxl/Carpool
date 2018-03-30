import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';
import { Participant } from '../../app/participant';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  private map: any;
  private geocoder: any;
 
  constructor(
    public navCtrl: NavController,
    @Inject(ParticipantsService) public participantsService: ParticipantsService
  ) { 
    this.geocoder = new google.maps.Geocoder();
  }
 
  ionViewDidEnter(){
    this.loadMap();
    this.showDestination();
    this.showParticipants();
  }
 
  loadMap(){ 
    // Ordina coordinates
    let latLng = new google.maps.LatLng(51.0517983,4.4519565);
 
    // Create the actual map
    let mapOptions = {
      center: latLng,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
  }

  showDestination() {
    // Try to search for Ordina
    this.geocoder.geocode({'address': "Ordina Belgium"}, (results, status) => {
      if (status === 'OK') {
        let latLng = results[0].geometry.location;
        var marker = new google.maps.Marker({
          icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          position: latLng,
          map: this.map 
        });
        this.map.setCenter(latLng);
      } else {
        console.log("Failed to find address");
      }
    });
  }

  showParticipants() {
    this.participantsService.getParticipants().forEach((participant, index) => {
      if (participant.address) {
        this.geocoder.geocode({'address': participant.address}, (results, status) => {
          if (status === 'OK') {
            let latLng = results[0].geometry.location;
            var marker = new google.maps.Marker({
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
              position: latLng,
              map: this.map 
            });
          } else {
            console.log("Failed to find address:", participant.address);
          }
        });
      }
    });
  }
  
}
