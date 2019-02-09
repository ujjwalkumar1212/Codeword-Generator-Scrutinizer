import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  errFlag = false;
  adduser = '';
  // constructor() { }
  constructor(public dialogRef: MatDialogRef<CreateCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public snackBar: MatSnackBar) { 
      this.adduser = { ...data};
    }

  ngOnInit() {
  }
  save(data) {
    if (data.valid) {
      console.log(data.value);
      // this.router.navigate(['/user'])
      this.snackBar.openFromComponent(CreateCouse1Component, {
      duration: 750,
    });
      this.dialogRef.close()
    } else {
      this.errFlag = true;
      data.reset
    }

  }

  rowClicked(row: any): void {
    console.log(row);
    this.dialogRef.close()
  }

}

@Component({
  selector: 'create-couse1.component',
  templateUrl: 'create-couse1.component.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class CreateCouse1Component {}


