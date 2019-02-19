import { Component, OnInit } from '@angular/core';
// import { createComponent } from '@angular/compiler/src/core';
import { MatDialog } from '@angular/material/dialog';
// import { CreateCourseComponent } from 'src/app/create-course/create-course.component';
import { Router } from '@angular/router';
import { AddCourseComponent } from 'src/app/add-course/add-course.component';

import { ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courseData: any;

  // constructor() { }
  constructor(public dialog: MatDialog, private router: Router, private dashboardService: DashboardService) { }
  ngOnInit() {
    this.fetchCourse();
  }

  fetchCourse() {
    this.dashboardService.getCodewordsList()
    .subscribe((response : any) => {
      this.courseData = response.data;
        console.log(this.courseData)
        })
   }

  // Get call
  openDialog(): void {
    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '500px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/coursestudent'])
  }  
}
