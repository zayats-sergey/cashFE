
import { Category } from "./category.model"

export type OperationTypeCode = 'profit' | 'consumption'

export interface Operation {
    _id?: string;
    description: string;
    idOperation: number;
    sum: number | null;
    category: Category;
    selected: boolean;
    createdAt?: any;
}

export interface OperationType{
    code: OperationTypeCode;
    title: string;
}