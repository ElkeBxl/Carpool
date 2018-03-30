export class Participant {

    name: string;

    address: string;

    public constructor(data?:Partial<Participant>) {
        Object.assign(this, data);
    }

}