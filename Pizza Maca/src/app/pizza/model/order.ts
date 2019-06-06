export class Order {
    _id: number;
    dataForm: object;
    total: number;
    listOrder: string[];

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.dataForm = obj && obj.dataForm || null;
        this.total = obj && obj.total || null;
        this.listOrder = obj && obj.listOrder || [];
        
    }
}