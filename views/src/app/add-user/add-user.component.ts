import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CodewordsetService } from 'src/app/services/codewordset.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  errFlag = false;
  adduser = '';
  tcodeWordSetData: any
  isFileUploaded = false;
  codeWordCount = 0;

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public snackBar: MatSnackBar, private codeWordSetService: CodewordsetService) { 
      this.adduser = { ...data};
    }


  ngOnInit() {
  }

  // Function to preview the count of uploaded file
  previewFiles(event: any) {
    let files = event.target.files[0];
    let data = new FormData();
    data.append('file', files)
    this.codeWordSetService
      .previewFiles(data)
      .subscribe((res: any) => {
        console.log(res)
        this.isFileUploaded = true;
        this.codeWordCount = res.count;
        this.tcodeWordSetData = res.data;
      },
      err => {
        console.log(err)
      })
  }

  save(data) {
    if (data.valid) {
      console.log(data.value);
      let sendData = {
        CodeWordSetName: data.value.name
      }
      let sendData2 = {
        CodeWordSetName: data.value.name,
        Codewords: this.tcodeWordSetData
      }
      this.codeWordSetService
        .saveCodewordSet(sendData)
        .subscribe((res: any) => {
          this.codeWordSetService
            .saveCodewords(sendData2)
            .subscribe((res: any) => {
      this.snackBar.openFromComponent(AddUserSnackBarComponent, {
      duration: 750,
    });
      this.dialogRef.close()},
      err => {
        console.log(err)
      })
  },
  err => {
    console.log(err)
  })
    } else {
      this.errFlag = true;
      data.reset
    }

  }

  rowClicked(row: any): void {
    console.log(row);
    this.dialogRef.close()
  }

  openRulesDialog(): void {
    const dialogRef = this.dialog.open(HintDialog, {
      width: '350px',
    });
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

@Component({
  selector: 'hint-dialog',
  templateUrl: 'hint-dialog.html',
})
export class HintDialog {}
