import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import {ForgetpwdComponent } from './forgetpwd/forgetpwd.component'
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent },
  { path: 'dashboard' , component: DashboardComponent },
  { path: 'register' , component : RegisterComponent },
  {path: 'forgetpwd',component: ForgetpwdComponent},
  {path: 'test',component: TestComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
