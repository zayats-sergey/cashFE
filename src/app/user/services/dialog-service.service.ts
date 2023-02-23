import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor() { }

  
  public dataObservable = new BehaviorSubject({});
  curentObservable = this.dataObservable.asObservable();

  onSelectCategory(dialogCategory: any): Observable<any>{
    this.dataObservable.next(dialogCategory);
    return of (dialogCategory)
  }




}
