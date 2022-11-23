export class Restaurant {
    name: string;
    speciality: string;
    description: string;
    imgPath: string;

    
    constructor(name: string) 
    {
        this.name = name;
        this.imgPath = '';
        this.description = '';
        this.speciality = '';
    };
}