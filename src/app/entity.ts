export class Entity {

    name: string;

    address: string;

    public constructor(data?:Partial<Entity>) {
        Object.assign(this, data);
    }

}