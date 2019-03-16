import { Component, OnInit } from '@angular/core';
import { StudentdashboardService } from '../services/studentdashboard.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
email:String
studentDetailList
  constructor(private stdetailsservice: StudentdashboardService) { }

  ngOnInit() {

   this.email= localStorage.getItem("email")
   console.log("Local: "+this.email)
   this.stdetailsservice.getStudentDeatils(this.email)
    .subscribe(res => {
      console.log(res)
      this.studentDetailList= res
    })

  }

}
