import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
   selector: 'app-password',
   templateUrl: './password.component.html',
     styleUrls: ['./password.component.css']
})

export class PasswordComponent {
   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   
  }

