export class Categorie {
    name: string;
    description: string;
    id: Number

    constructor(name: string, id: Number) 
    {   
        this.id = id;
        this.name = name;
        this.description = '';
    };
}