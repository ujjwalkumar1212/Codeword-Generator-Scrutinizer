import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errFlag = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(data){
    if(data.valid){
      console.log(data.value);
      this.router.navigate(['/dashboard'])
    } else {
      this.errFlag = true;
      data.reset
    }
    
  }

}
