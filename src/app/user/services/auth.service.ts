import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/reg",
      // "account/reg",
      user,
      {headers: headers}
    )
  }


  authUser(user: any): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(
      "http://localhost:3000/account/auth",
      // "account/auth",
      user,
      {headers: headers}
    )
  }

  token: any;
  user: any;
  storeUser(user: any, token: any){
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.token = token;
  }

  logout(){
    this.user = null;
    this.token = null;
    localStorage.clear();
  }

  isLoggedIn() {
    // console.log( tokenNotExpired());
    return tokenNotExpired();
  }

}
