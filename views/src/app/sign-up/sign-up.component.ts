import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // hide = true;
  
  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

 
  //     email: '';
  //     password: '';
  //     repeatPassword: '';
  //     instructor: false;
  //     msg: '';
  //     signed: false;
   
  // validations: {
  //   password: {
  //     required,
  //     // minLength: minLength(8)
  //   },
  //   repeatPassword: {
  //     // sameAsPassword: sameAs('password')
  //   },
  //   instructor: {
  //     // sameAs: sameAs(() => true)
  //   }
  // }

  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
  }

  onRegister(data) {
    // this.msg = ''
    // let emailid = this.email
    // if (data.valid) {
      console.log(data.value);
      // return true;
      this.userService
        .validateEmail(data.value)
        .subscribe((res : any) => {
          console.log(res)
          if (!res.message.data) {
            // console.log('onregister clicked fullnaem', this.email)
            this.userService
              .signup(data.value)
              .subscribe((res : any) => {
                // if (res.message.data) {
                //   setTimeout(function () {
                    
                //   }, 1)
                // }
                // localStorage.setItem('token', res.token)
                // localStorage.setItem('status', res.isInstructor)
                this.router.navigate(['/login'])
              },
              err => {
                console.log(err)
                 alert("Invalid credentials");
              })
          } 
          
          else {
            alert('Invalid Email')
          }
        },
        err => {
          console.log(err)
          // alert("Invalid credentials");
        })
    }

  

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/'])
  }


}
