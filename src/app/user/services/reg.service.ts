import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor() { }

  checkName(name: any){
    if(name === ''){
      return false
    }else{
      return true
    }
  }
 
checkLogin (login: any){
  if(login === ''){
    return false
  }else{
    return true
  }
}

checkEmail(email: any){
  if(email === ''){
    return false
  }else{
    return true
  }
}

checkPassword(password: any){
  if(password === ''){
    return false
  }else{
    return true
  }
}




}
