import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CodewordsetService } from 'src/app/services/codewordset.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service'
import { DashboardService } from 'src/app/services/dashboard.service';
import { StudentdashboardService } from '../services/studentdashboard.service';
@Component({
  selector: 'app-editcodewordset',
  templateUrl: './editcodewordset.component.html',
  styleUrls: ['./editcodewordset.component.css']
})
export class EditcodewordsetComponent implements OnInit {
  courseData: any;
  addslot: any;

  constructor(public dialog: MatDialog, 
    public dialogRef: MatDialogRef<EditcodewordsetComponent>,
    private router: Router, private route: ActivatedRoute,
    private dashboardService: DashboardService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data) { 
      this.addslot = { ...data}
      console.log(this.addslot)
    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
   
  }
 
  

  rowClicked1(row: any): void {
    console.log(row);
    this.dialogRef.close()
  }

  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }
  editCodeword(data){
    console.log('save called')
    if(data.valid){
      data.isCanceled = false;
      data.userData = this.addslot
      this.dialogRef.close(data);
    }
  }
}
