import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  errFlag = false;
  adduser = '';

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
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
      this.snackBar.openFromComponent(AddUserSnackBarComponent, {
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
  selector: 'snack-bar-component-add-user',
  templateUrl: 'add-user-snack-bar.html',
  styles: [`
    .example-pizza-party {
      color: white;
    }
  `],
})
export class AddUserSnackBarComponent {}
