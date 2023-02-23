import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegService } from './services/reg.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsLoggedIn } from './isLogged.guard';
import { ControlPageComponent } from './control-page/control-page.component';
import { TypeSwitcherComponent } from './type-switcher/type-switcher.component';
import { CategoriesComponent } from './categories/categories.component';
import { OperationsComponent } from './operations/operations.component';
import { OperationEditorComponent } from './operation-editor/operation-editor.component';
import {MatTableModule} from '@angular/material/table';
import { CategoriesEditorComponent } from './categories-editor/categories-editor.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { DialogServiceService } from './services/dialog-service.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RegComponent,
    AuthComponent,
    HomeComponent,
    DashboardComponent,
    ControlPageComponent,
    TypeSwitcherComponent,
    CategoriesComponent,
    OperationsComponent,
    OperationEditorComponent,
    CategoriesEditorComponent,
    DatepickerComponent,
    DialogContentExampleDialogComponent,
    

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    TextFieldModule,
    MatNativeDateModule,
    // MomentDateModule,
    MaterialExampleModule,
    
  ],
  exports: [
    HeaderComponent,
    ControlPageComponent,
  ],
  providers:[
    RegService,
    AuthService,
    IsLoggedIn,
    DialogServiceService,
  ],

  entryComponents: [
    CategoriesComponent,
    DialogContentExampleDialogComponent
  ],
})
export class UserModule { }
