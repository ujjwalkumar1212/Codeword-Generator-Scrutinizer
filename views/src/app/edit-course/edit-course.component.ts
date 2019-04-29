import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
addcourse :any
  constructor(public dialogRef: MatDialogRef<EditCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.addcourse = {...data}
      this.addcourse.Startdate = new Date(this.addcourse.Startdate);
      this.addcourse.Enddate = new Date(this.addcourse.Enddate);
    }

  ngOnInit() {
  }

  minDate = new Date();
  minDate2 = new Date();
    


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.minDate2 = this.addcourse.Startdate;
    console.log(this.addcourse.Startdate.getTime())
    if(this.addcourse.Startdate.getTime() > this.addcourse.Enddate.getTime()){
      this.addcourse.Enddate = this.addcourse.Startdate;
    }
  }
  
  // Closing of Add Course model
  rowClicked(row: any): void {
    console.log(row);
    this.dialogRef.close({isClosed : true})
  }

  // Add Course
  save(data) {
    
    if (data.valid) {
      this.dialogRef.close({isClosed : true, data: this.addcourse})
    }
  }
}
