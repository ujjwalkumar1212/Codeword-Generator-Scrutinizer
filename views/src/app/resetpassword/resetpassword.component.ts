import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  @ViewChild(FormGroupDirective) myForm: NgForm;
  user: any;
  hide = true;
  confirmhide = true;
  constructor(private routeSnapshot: ActivatedRoute, private fb: FormBuilder, private userService: UserService, private router:Router) { }
  formdata = this.fb.group({
    password: [''],
    confirmpassword: ['']
  })

  get password(){
    return this.formdata.get('password')
  }

  get confirmpassword(){
    return this.formdata.get('confirmpassword')
  }
  ngOnInit() {
    this.user = jwt_decode(this.routeSnapshot.snapshot.queryParams.token)
  }

  resetpassword () {
    this.userService
    .resetpassword( this.password.value, this.routeSnapshot.snapshot.queryParams.token)
    .subscribe(
      data => {
        alert("Password updated")
        this.myForm.resetForm()
        this.router.navigateByUrl("/")
      },
      err => console.log(err)
      )
  }

}
