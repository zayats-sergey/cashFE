import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private flashMessages: FlashMessagesService,
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.disabledBtnStorage();
  }

  logoutUser(){
    this.authService
      .logout()
      this.flashMessages.show('Ви вийшли із облікового запису',{
        cssClass: 'alert-warning',
        timeout : 2000,
      })  
      this.router.navigate(['auth']);
      
        this.showBtn = true;
        localStorage.setItem('showbutton', JSON.stringify(this.showBtn));
        let newShowBtn = localStorage.getItem('showbutton');
        this.showBtn = newShowBtn !== null ? JSON.parse(newShowBtn) : null;
        // console.log(this.showBtn);
      return false;
  }

  showBtn: boolean = true;
  disabledBtn(){
    // console.log(this.showBtn);
    this.showBtn = false;
    localStorage.setItem('showbutton', JSON.stringify(this.showBtn));
  }

  disabledBtnStorage(){
    let newShowBtn = localStorage.getItem('showbutton');
    this.showBtn = newShowBtn !== null ? JSON.parse(newShowBtn) : null;
    // console.log(this.showBtn);
  }










}
