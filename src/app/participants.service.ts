import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Entity } from './entity';

@Injectable()
export class ParticipantsService {

    private participants: Participant[];

    public destination: Entity;

    constructor() { 
        this.participants = [];
        //this.participants.push(new Participant({ name: "Elke", address: "Dageraadstraat 47, 1000 Brussel" }));
        this.participants.push(new Participant({ name: "Ines", address: "Brusselsesteenweg 254, 1980 Eppegem" }));
        this.participants.push(new Participant({ name: "Jos het debiele ei", address: "Ladeuzeplein Leuven" }));
        this.participants.push(new Participant({ name: "Kabouter Wesley", address: "Grote markt Haacht" }));
        this.participants.push(new Participant({ name: "Home", address: "Dageraadstraat 47, 1000 Brussel", hasCar: true }));
        this.destination = new Entity({ name: "Workworkworkwork", address: "Ordina Belgium" });
    }

    addParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    getParticipants(): Participant[] {
        return this.participants.filter(participant => !participant.hasCar);
    }

    getOrigin(): Entity {
        return this.participants.find(participant => participant.hasCar);
    }

}