import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { CoursestudentComponent } from './coursestudent/coursestudent.component';
import { CodewordComponent } from './codeword/codeword.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import{ContactListComponent} from './contact-list/contact-list.component';



const routes: Routes = [
  { path: 'signup' , component: SignUpComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard' , component: DashboardComponent },
  // { path: 'register' , component : RegisterComponent },
  { path: 'studentdashboard' , component : StudentdashboardComponent },
  // {path:'login/register',redirectTo: '/register'},
  {path:'forgotpassword',component:PasswordComponent },
  {path:'login/forgotpassword',redirectTo: '/forgotpassword'},
  {path: 'codewordset',component:CodewordsetComponent },
  {path: 'codeword',component:CodewordComponent },
  {path: 'coursestudent',component:CoursestudentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'contactlist', component:ContactListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
