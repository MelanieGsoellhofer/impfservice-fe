
export class Location {
    public id: number;
    public zipcode: number;
    public title: string;
    public adress: string;
    public description?: string;

    constructor( zipcode, title, adress, description)
    {
        this.zipcode = zipcode;
        this.title = title;
        this.adress = adress;
        this.description = description;
    }
}
