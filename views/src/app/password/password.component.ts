import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators, NgForm, FormGroupDirective, FormBuilder} from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
   selector: 'app-password',
   templateUrl: './password.component.html',
     styleUrls: ['./password.component.css']
})

export class PasswordComponent {
  
  @ViewChild(FormGroupDirective) f: NgForm;
  
  myform = this.fb.group({
    "email": ['', [Validators.required, Validators.email]]  
  })

  get email(){
    return this.myform.get("email")
  }

  constructor(private userService: UserService, private fb: FormBuilder){}
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  resetpassword(){
    this.userService
    .resetpasswordemail(this.email.value)
    .subscribe(data => {
      alert(data)
      this.f.resetForm()
    }, err => console.error(err))
  }
   
  }

