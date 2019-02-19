import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  errFlag = false;
  addcourse = '';
  
  

  constructor(public dialogRef: MatDialogRef<AddCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public snackBar: MatSnackBar) { 
      this.addcourse = { ...data};
    }

    ngOnInit() {
      
    }
  
    save(data) {
      if (data.valid) {
        console.log(data.value);
        // this.router.navigate(['/user'])
        this.snackBar.openFromComponent(AddCourseSnackBarComponent, {
        duration: 750,
      });
        this.dialogRef.close()
      } else {
        this.errFlag = true;
        data.reset
      }
  
    } 

    
    names: CodewordSetName[] = [
      {value: "Small Codeword Set"},
      {value: "Large Codeword Set"},
    ];
  

    rowClicked(row: any): void {
      console.log(row);
      this.dialogRef.close()
    }

}

export interface CodewordSetName {
  value: String;
  viewValue? : String;
}



@Component({
  selector: 'snack-bar-component-add-user',
  templateUrl: 'add-course-snack-bar.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class AddCourseSnackBarComponent {}
