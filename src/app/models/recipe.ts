export class Recipe {
    name: string;
    speciality: string;
    description: string;
    imgPath: string;
    link: string;

    
    constructor(name: string) 
    {
        this.name = name;
        this.imgPath = '';
        this.description = '';
        this.speciality = '';
        this.link = '';
    };
}