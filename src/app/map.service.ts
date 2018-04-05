import { Injectable, ElementRef } from "@angular/core";
import { Entity } from "./entity";

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

    private markers: any[] = [];

    private origin: any;

    private destination: any;

    private directionsService: any;

    private directionsDisplay: any;

    private distanceMatrixService: any;

    public constructor() {
    }

    public initialize(mapElement: ElementRef) {    
        this.geocoder = new google.maps.Geocoder();
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.distanceMatrixService = new google.maps.DistanceMatrixService();

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
        //this.directionsDisplay.setDirections(null);
        this.addresses = [];
    }

    public markAddress(entity: Entity, markerType: MarkerType) {
        // Try to search for Ordina
        this.geocoder.geocode({ 'address': entity.address }, (results, status) => {
            if (status === 'OK') {
                let address = results[0];
                this.persistAddress(address, markerType);
                let latLng = address.geometry.location;
                let marker = new google.maps.Marker({
                    icon: this.getIcon(markerType),
                    position: latLng,
                    map: this.map 
                });
                this.markers.push(marker);
                this.map.setCenter(latLng);
            } else {
                console.log("Failed to find address");
            }
        });
    }

    public clearMarkers() {
        this.markers.forEach(marker => marker.setMap(null));
    }

    public markRoute() {       
        // let request = {
        //     destinations: this.addresses.map(x => x.formatted_address).concat(this.destination.formatted_address, this.origin.formatted_address),// [this.destination.formatted_address],
        //     origins: this.addresses.map(x => x.formatted_address).concat(this.destination.formatted_address, this.origin.formatted_address),
        //     drivingOptions: {
        //         departureTime: new Date(Date.now()),
        //         trafficModel: 'optimistic'
        //     },
        //     travelMode: 'DRIVING'
        // };
        // console.log(request);
        // this.distanceMatrixService.getDistanceMatrix(request, (response, status) => { console.log(JSON.stringify(response)) });
        let request = {
            origin: this.origin.formatted_address,
            destination: this.destination.formatted_address,
            waypoints: this.addresses.map(x => ({ location: x.formatted_address })),
            travelMode: 'DRIVING',
            drivingOptions: {
                departureTime: new Date(Date.now()),
                trafficModel: 'optimistic'
            },
            optimizeWaypoints: true
        };
        this.directionsService.route(request, (result, status) => {
            if (status == 'OK') {
                this.directionsDisplay.setDirections(result);
            }
        })
    }

    public calculateRoute(distances:any): string[] {
        let result:string[] = [];

        distances['rows'].forEach((row, rowIndex) => {
            row['elements'].forEach((element, elementIndex) => {
                
            });
        });

        return result;
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