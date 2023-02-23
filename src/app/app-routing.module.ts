import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './user/auth/auth.component';
import { ControlPageComponent } from './user/control-page/control-page.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { HeaderComponent } from './user/header/header.component';
import { HomeComponent } from './user/home/home.component';
import { IsLoggedIn } from './user/isLogged.guard';
import { RegComponent } from './user/reg/reg.component';


const routes: Routes = [
  // {path: '', component: HeaderComponent},
  // {path: '', redirectTo: 'header', pathMatch: 'full'},
  // {path: 'header', component: HeaderComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reg', component: RegComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedIn],  
      children: [
        {path: 'control-page', component: ControlPageComponent, outlet: 'outletControlPage'}
      ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
