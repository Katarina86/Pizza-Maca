export class Pizza {
    _id: number;
    name: string;
    description: string;
    picture: string;
    price: number;
    grade: number;
    vegetarian: boolean;
    discount: boolean;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.picture = obj && obj.picture || null;
        this.price = obj && obj.price || null;
        this.grade = obj && obj.grade || null;
        this.vegetarian = obj && obj.vegetarian || null;
        this.discount = obj && obj.discount || null;
    }
}