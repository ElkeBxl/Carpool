import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParticipantsService } from '../../app/participants.service';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(
    public navCtrl: NavController,
    @Inject(ParticipantsService) public participantsService: ParticipantsService
  ) { }
 
  ionViewDidEnter(){
    this.loadMap();
  }
 
  loadMap(){ 
    // Ordina coordinates
    let latLng = new google.maps.LatLng(51.0517983,4.4519565);

    // Try to search for Ordina
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': "Ordina Belgium"}, (results, status) => {
      if (status === 'OK') {
        latLng = results[0].geometry.location;
        var marker = new google.maps.Marker({
          position: latLng,
          map: this.map 
        });
        this.map.setCenter(latLng);
      } else {
        console.log("Failed to find address");
      }
    });
 
    // Create the actual map
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 

  }
  
}
