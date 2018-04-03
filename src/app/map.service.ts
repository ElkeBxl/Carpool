import { Injectable, ElementRef } from "@angular/core";

declare var google;

export enum MarkerType {
    Participant = 1,
    Destination = 2,
    Origin = 3
}

@Injectable()
export class MapService {

    private geocoder: any;

    private map: any;

    private addresses: any[] = [];

    private origin: any;

    private destination: any;

    private directionsService: any;

    private directionsDisplay: any;

    public constructor() {
        this.geocoder = new google.maps.Geocoder();
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
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
        this.directionsDisplay.setMap(this.map);
    }

    public markAddress(address: string, markerType: MarkerType) {
        // Try to search for Ordina
        this.geocoder.geocode({'address': address}, (results, status) => {
            if (status === 'OK') {
                let address = results[0];
                this.persistAddress(address, markerType);
                let latLng = address.geometry.location;
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

    public markRoute() {       
        let request = {
            origin: this.origin.formatted_address,
            destination: this.destination.formatted_address,
            waypoints: this.addresses.map(x => ({ location: x.formatted_address })),
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(Date.now()),
                trafficModel: 'optimistic'
            },
            //optimizeWaypoints: true
        };
        console.log(this.addresses);
        this.directionsService.route(request, (result, status) => {
            if (status == 'OK') {
                this.directionsDisplay.setDirections(result);
            }
        })
    }

    private persistAddress(address: string, markerType: MarkerType): void {        
        switch (markerType) {
            case MarkerType.Origin:
                this.origin = address;
                break;
            case MarkerType.Destination:
                this.destination = address;
                break;
            case MarkerType.Participant:
                this.addresses.push(address);
                break;
        }
    }

    private getIcon(markerType: MarkerType): string {
        switch (markerType) {
            case MarkerType.Destination:
                return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
            case MarkerType.Participant:
                return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
            case MarkerType.Origin:
                return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
            default:
                return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
        }
    }

}