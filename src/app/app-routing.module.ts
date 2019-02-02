import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { CodewordsetComponent } from './codewordset/codewordset.component';
import { CoursestudentComponent } from './coursestudent/coursestudent.component';



const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'register' , component : RegisterComponent },
  {path:'login/register',redirectTo: '/register'},
  {path:'link',component:PasswordComponent },
  {path:'login/link',redirectTo: '/link'},
  {path: 'codewordset',component:CodewordsetComponent },
  {path: 'coursestudent',component:CoursestudentComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
