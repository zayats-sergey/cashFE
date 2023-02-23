import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { OPERATIONS } from '../data/operation.data';
import { Operation } from '../models/operation.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  // operations  : Operation[] = OPERATIONS;
  
  constructor(
    private http: HttpClient,

  ) { }

  // getOperations():Observable<Operation[]>{
  //   return of (this.operations);
  // }

  addOperation(operation: Operation):Observable<Operation>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<Operation>( 
      // "http://localhost:3000/account/dashboard/operations",
      "dashboard/operations",
      operation,
      {headers: headers}
      )
  }

  getOperations():Observable<Operation[]>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<Operation[]>( 
      // "http://localhost:3000/account/dashboard/allOperations",
      "dashboard/allOperations",
      {headers: headers}
      )
  }

  mergeOperation(operation: Operation):Observable<Operation>{
    console.log(operation.selected);
    // localStorage.setItem('operation', JSON.stringify(operation));
    // let newOperation = localStorage.getItem('operation');
    // let returnNewOperation = newOperation !== null ? JSON.parse(newOperation) : null;
    // console.log(returnNewOperation);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.put<Operation>( 
      // "http://localhost:3000/account/dashboard/allOperations/" 
      "dashboard/allOperations/"
      + operation._id,
      operation,
      {headers: headers}
      )
    // return of (operation)
  }


  dellOperation(operation: Operation):Observable<Operation>{
    console.log(operation._id);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.delete<Operation>( 
      // "http://localhost:3000/account/dashboard/allOperations/"
      "dashboard/allOperations/"
      + operation._id,
      {headers: headers}
      )
    }

    selectDataStart(newStart: any):Observable<any>{
      console.log(newStart);
      let someNewStart = {
        description: '',  
        idOperation: 0,
        category: {
            num:0,
            id: 0,
            type: '',
            name: '',
        },
        sum: 0,
        selected: false,
        createdAt: newStart,
        };
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this.http.post<any>( 
        // "http://localhost:3000/account/dashboard/allOperations",
        "dashboard/allOperations",
        someNewStart,
        {headers: headers}
        )
    }

    

   




}
