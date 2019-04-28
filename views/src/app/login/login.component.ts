import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errFlag = false;

  constructor(private router: Router, 
    private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogin(data) {
    if (data.valid) {
      console.log(data.value);
      this.userService
        .validateEmail(data.value)
        .subscribe((res: any) => {
          console.log(res)
          if (res && res.message) {
            this.userService
              .signin(data.value)
              .subscribe((res: any) => {
                localStorage.setItem('token', res.token)
                this.snackBar.open("Loggedin succesful", "", {
                  duration: 2000,
                  horizontalPosition: 'right'
                });
                if( res.isInstructor){
                  this.router.navigate(['/dashboard'])
                }
                else{
                  localStorage.setItem('email', data.value.email)
                  this.router.navigate(['/studentdashboard'])
                }
                
              },
            )

          } else {
            // this.errFlag = true;
            this.snackBar.open("Invalid username/password", "", {
              duration: 2000,
              horizontalPosition: 'right'
            });
            data.resetForm();
          }
        },
      )
    }
  }
}
