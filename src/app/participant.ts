import { Entity } from "./entity";

export class Participant extends Entity {

    hasCar: boolean;

    carCapacity: number;

    public constructor(data?:Partial<Participant>) {
        super();
        Object.assign(this, data);
    }

}