import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { Entity } from './entity';

@Injectable()
export class ParticipantsService {

    private participants: Participant[];

    constructor() { 
        this.participants = [];
        //this.participants.push(new Participant({ name: "Elke", address: "Dageraadstraat 47, 1000 Brussel" }));
        this.participants.push(new Participant({ name: "Ines", address: "Brusselsesteenweg 254, 1980 Eppegem" }));
        this.participants.push(new Participant({ name: "Jos het debiele ei", address: "Ladeuzeplein Leuven" }));
        this.participants.push(new Participant({ name: "Kabouter Wesley", address: "Grote markt Haacht" }));
    }

    addParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    getParticipants(): Participant[] {
        return this.participants;
    }

    getDestination(): Entity {
        return new Entity({ name: "Workworkworkwork", address: "Ordina Belgium" });
    }

    getOrigin(): Entity {
        return new Entity({ name: "Home", address: "Dageraadstraat 47, 1000 Brussel" });
    }

}