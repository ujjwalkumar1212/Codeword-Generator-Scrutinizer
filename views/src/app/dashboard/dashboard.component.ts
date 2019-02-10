import { Component, OnInit } from '@angular/core';
import { createComponent } from '@angular/compiler/src/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateCourseComponent } from 'src/app/create-course/create-course.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // constructor() { }
  constructor(public dialog: MatDialog, private router: Router) { }
  ngOnInit() {
  }

  // Get call
  openDialog1(): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '500px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      });
  }
}
