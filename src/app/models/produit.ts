export class Product {
    id: number;
    name: string;
    category: number;
    price: number;
    unit: string ;
    availability: boolean ;
    sale: boolean;
    discount: number ;
    comments: string ;
    owner: string

    constructor(name: string) 
    {
        this.id = 0;
        this.name = name;
        this.category = 0;
        this.price = 0;
        this.unit = "";
        this.availability = false;
        this.sale = false;
        this.discount = 0;
        this.comments = "";
        this.owner = "";
    };
}