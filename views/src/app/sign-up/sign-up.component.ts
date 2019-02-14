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


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onRegister(data) {
    console.log(data.value);
    this.userService
      .validateEmail(data.value)
      .subscribe((res: any) => {
        console.log(res)
        if (!res.message.data) {
          this.userService
            .signup(data.value)
            .subscribe((res: any) => {
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
      })
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/'])
  }


}
