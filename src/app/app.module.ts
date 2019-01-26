import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
<<<<<<< HEAD
    ForgetpwdComponent,
    TestComponent,
=======
    ForgetpwdComponent
>>>>>>> e2172ef7f785627b216f7469fc8139151dcd9eae
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
<<<<<<< HEAD
    MatInputModule,
    MatDialogModule
    
=======
    MatMenuModule,
    MatInputModule
>>>>>>> e2172ef7f785627b216f7469fc8139151dcd9eae
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
