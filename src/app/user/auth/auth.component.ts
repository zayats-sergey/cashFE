import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login: string = '';
  password: string = '';

  constructor(
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  userLoginClick(){
    const user = {
      login: this.login,
      password: this.password,
    }
    if(user.login !== '' &&  user.password == ''){
      this.flashMessages.show('enter password',{
        cssClass: 'alert-danger',
        timeout : 2000,
      })
      return false;
    }

    this.authService
      .authUser(user)
      .subscribe((data)=>{
        if(!data.success || user.login === ''){
          this.flashMessages.show(data.msg ,{
            cssClass: 'alert-danger',
            timeout : 2000,
          }) 
      }else{
        this.flashMessages.show('user autorisation success!!!!',{
          cssClass: 'alert-success',
          timeout : 2000,
        })
        // this.router.navigate([{outlets: {outletUserAuth: 'dashboard'}}]);
        // this.authService.isLoggedIn().subscribe((res)=>{
        //   // res = true;
        // })
        this.router.navigate(['dashboard']);
        this.authService.storeUser(data.user, data.token);
      };
    })
    return


  }

}
