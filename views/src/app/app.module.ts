import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';



// import { PasswordComponent } from './password/password.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { PasswordComponent } from './password/password.component';
import { AddUserComponent, AddUserSnackBarComponent } from './add-user/add-user.component';
import { CoursestudentComponent } from './coursestudent/coursestudent.component';
import { CodewordComponent } from './codeword/codeword.component';
import { CreateCourseComponent,CreateCouse1Component, } from './create-course/create-course.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CodewordsetComponent,
    PasswordComponent,
    AddUserComponent,
    AddUserSnackBarComponent,
    CoursestudentComponent,
    CodewordComponent,
    CreateCourseComponent,
    CreateCouse1Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,    
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule


  ],
  providers: [],
  entryComponents: [
    AddUserComponent,
    AddUserSnackBarComponent,
    CreateCouse1Component,
    CreateCourseComponent
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
