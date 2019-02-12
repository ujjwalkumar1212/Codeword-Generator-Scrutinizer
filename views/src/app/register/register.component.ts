import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  emailid;
  passwd;
  cnfpasswd;



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private http: HttpClient) { }

  register(instructor) {
    if(this.passwd==this.cnfpasswd){
      var isInstructor= false;
    if(instructor.touched){
      isInstructor=true;
    }
    var req = {
      email:this.emailid,
      password:this.passwd,
      instructor:isInstructor
    }
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
     

    var signupFormJSON = JSON.stringify(req);
    
    this.http.post('http://localhost:3000/register', signupFormJSON, { headers: headers })
    .subscribe(function(response){
      console.log(response);
    })
    
    // console.log(this.emailid);
    // console.log(this.passwd);
    // console.log(instructor);
    }
    
  }

  ngOnInit() {
  }

}
