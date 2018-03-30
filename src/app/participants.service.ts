import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService {

    private participants: any[];

    constructor() { 
        this.participants = [];
        this.participants.push({ name: "Elke", address: "Dageraadstraat 47, 1000 Brussel" });
        this.participants.push({ name: "Ines", address: "Brusselsesteenweg 254, 1980 Eppegem" });
    }

    addParticipant(participant: any): void {
        this.participants.push(participant);
    }

    getParticipants(): any[] {
        return this.participants;
    }

}