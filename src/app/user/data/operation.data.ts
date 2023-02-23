import { Operation } from '../models/operation.model';

export const OPERATIONS : Operation[] = [
    {        
description: 'не было увеличения з/п',         
idOperation: 1,
category: {
    num:1,
    id: 10,
    type: 'profit',
    name: 'Зарплата',
},
sum: 150000,
selected: false,
},
{
description: 'не было увеличения з/п',      
idOperation: 2,
category: {
    num:2,
    id: 20,
    type: 'profit',
    name: 'Зарплата 2',
},
sum: 50000,
selected: false,
},
{
description: 'не было увеличения з/п',  
idOperation: 3,
category: {
    num:1,
    id: 40,
    type: 'consumption',
    name: 'Бензин',
},
sum: 2000,
selected: false,
},
{
description: 'не было увеличения з/п',      
idOperation: 4,
category: {
    num:2,
    id: 50,
    type: 'consumption',
    name: 'Еда',
},
sum: 1500,
selected: false,
},
{
    description: 'не было увеличения з/п',  
    idOperation: 5,
    category: {
        num:2,
        id: 50,
        type: 'consumption',
        name: 'Еда',
    },
    sum: 2300,
    selected: false,
    },
    {
        description: 'не было увеличения з/п',  
        idOperation: 6,
        category: {
            num:2,
            id: 50,
            type: 'consumption',
            name: 'Еда',
        },
        sum: 1800,
        selected: false,
        },

];
