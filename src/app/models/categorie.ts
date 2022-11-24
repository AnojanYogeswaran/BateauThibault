export class Categorie {
    id:number;
    name: string;
    description: string;

    constructor(name: string) 
    {
        this.id = 0;
        this.name = name;
        this.description = '';
    };
}