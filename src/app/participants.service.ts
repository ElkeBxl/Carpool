import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantsService {

    private participants: any[];

    constructor() { 
        this.participants = [];
    }

    addParticipant(participant: any): void {
        this.participants.push(participant);
    }

    getParticipants(): any[] {
        return this.participants;
    }

}