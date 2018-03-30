import { Injectable, ElementRef } from "@angular/core";

declare var google;

export enum MarkerType {
    Participant = 1,
    Destination = 2
}

@Injectable()
export class MapService {

    private geocoder: any;

    private map: any;

    public constructor() {
        this.geocoder = new google.maps.Geocoder();
    }

    public initialize(mapElement: ElementRef) {    
        // Ordina coordinates
        let latLng = new google.maps.LatLng(51.0517983,4.4519565);
     
        // Create the actual map
        let mapOptions = {
          center: latLng,
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }; 
        this.map = new google.maps.Map(mapElement.nativeElement, mapOptions); 
    }

    public markAddress(address: string, markerType: MarkerType) {
        // Try to search for Ordina
        this.geocoder.geocode({'address': address}, (results, status) => {
          if (status === 'OK') {
            let latLng = results[0].geometry.location;
            new google.maps.Marker({
              icon: this.getIcon(markerType),
              position: latLng,
              map: this.map 
            });
            this.map.setCenter(latLng);
          } else {
            console.log("Failed to find address");
          }
        });
    }

    private getIcon(markerType: MarkerType): string {
        switch (markerType) {
            case MarkerType.Destination:
                return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
            case MarkerType.Participant:
                return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            default:
                return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
        }
    }

}