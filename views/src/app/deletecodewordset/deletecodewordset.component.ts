import { Component, OnInit } from '@angular/core';
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
  selector: 'app-deletecodewordset',
  templateUrl: './deletecodewordset.component.html',
  styleUrls: ['./deletecodewordset.component.css']
})
export class DeletecodewordsetComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DeletecodewordsetComponent>,private router: Router, private route: ActivatedRoute,private dashboardService: DashboardService) { }

  ngOnInit() {
  }
  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }

  save(row: any): void {
    this.dialogRef.close({isCanceled : false});
  }
}
