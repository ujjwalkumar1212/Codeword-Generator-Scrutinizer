import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-permernant-del',
  templateUrl: './permernant-del.component.html',
  styleUrls: ['./permernant-del.component.css']
})
export class PermernantDelComponent implements OnInit {

  constructor(public dialog: MatDialog,
     public dialogRef: MatDialogRef<PermernantDelComponent>,
     @Optional() @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }
  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }

  save(row: any): void {
    this.dialogRef.close({isCanceled : false});
  }
}
