

export class Users{
    id?: number;
    name?: string;
    age?: number;
    nationality?: string;
    gender?: string;

    constructor(obj?: Users){
        this.id = (obj && obj.id) || undefined;
        this.name = (obj && obj.name) || undefined;
        this.age = (obj && obj.age) || undefined;
        this.nationality = (obj && obj.nationality) || undefined;
        this.gender = (obj && obj.gender) || undefined;
    }
}