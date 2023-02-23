import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CATEGORIES } from '../data/category.data';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // categories : Category[] = CATEGORIES;

  constructor(
    private http: HttpClient,
  ) { }

// getCategories(): Observable<Category[]>{
//    return of (this.categories);
// }

addDataCategories(category: Category): Observable<Category>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post<Category>(
    // "http://localhost:3000/account/dashboard/categories",
    "dashboard/categories",
    category,
    {headers: headers}
  )
}

getCategories(): Observable<Category[]>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.get<Category[]>(
    // "http://localhost:3000/account/dashboard/allCategories",
    "dashboard/allCategories",
    {headers: headers}
  )
}

// public dataObservableAdd = new BehaviorSubject({});
// curentObservableAdd = this.dataObservableAdd.asObservable();

addNewCategory(category: Category): Observable<Category>{
  console.log(category);
// this.dataObservableAdd.next(category);
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.post<Category>(
    // "http://localhost:3000/account/dashboard/categories",
    "dashboard/categories",
    category,
    {headers: headers}
  )
}


  public dataObservable = new BehaviorSubject<Object>('');
  curentObservable = this.dataObservable.asObservable();

dellCategory(category: any): Observable<any>{
  this.dataObservable.next(category.name);
  // console.log(category);
  let idCategory = category._id;
  // console.log(idCategory);
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.delete<any>(
    // "http://localhost:3000/account/dashboard/allCategories/" 
    "dashboard/categories"
    + idCategory,
    {headers: headers}
  )
}







}
