import { Injectable } from '@angular/core';
import { Participant } from './participant';

@Injectable()
export class ParticipantsService {

    private participants: Participant[];

    constructor() { 
        this.participants = [];
        this.participants.push(new Participant({ name: "Elke", address: "Dageraadstraat 47, 1000 Brussel" }));
        this.participants.push(new Participant({ name: "Ines", address: "Brusselsesteenweg 254, 1980 Eppegem" }));
    }

    addParticipant(participant: Participant): void {
        this.participants.push(participant);
    }

    getParticipants(): Participant[] {
        return this.participants;
    }

}