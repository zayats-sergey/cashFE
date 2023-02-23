import { OperationTypeCode } from "./operation.model";


export interface Category {
    _id?: any;
    num:number;
    id: number,
    type: OperationTypeCode,
    name: string,
    createdAt?:string,
}


