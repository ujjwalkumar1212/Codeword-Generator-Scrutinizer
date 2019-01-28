import { Component, OnInit } from '@angular/core';





import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
   selector: 'app-password',
   templateUrl: './password.component.html',
     styleUrls: ['./password.component.css']
})

export class PasswordComponent {
   title = 'Angular 4 Project!';
   todaydate;
   componentproperty;
   emailid;
   formdata;
   ngOnInit() {
      // this.formdata = new FormGroup({
      //    emailid: new FormControl("", Validators.compose([
      //       Validators.required,
      //       Validators.pattern("[^ @]*@[^ @]*")
      //    ])),
      //    passwd: new FormControl("")
      // });
   }
   submit(data) {this.emailid = data.emailid;
    var server 	= data.email.server.connect({
          user:    "Cherukuruchaithanya4446@gmail.com",
          password:"9441499747cH@",
          host:    "Cherukuruchaithanya4446@email.com",
          ssl:     true
       });
       
       // send the message and get a callback with an error or details of the message that was sent
       server.send({
          text:    "i hope this works",
          from:    "Cherukuruchaithanya4446@gmail.com",
          to:      data.email,
          cc:      "else <else@your-email.com>",
          subject: "testing emailjs"
       }, function(err, message) { console.log(err || message); });
      }
  }

