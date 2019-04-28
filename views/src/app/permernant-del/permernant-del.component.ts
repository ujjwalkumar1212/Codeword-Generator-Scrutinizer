import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-permernant-del',
  templateUrl: './permernant-del.component.html',
  styleUrls: ['./permernant-del.component.css']
})
export class PermernantDelComponent implements OnInit {

  constructor(public dialog: MatDialog,
     public dialogRef: MatDialogRef<PermernantDelComponent>) { }

  ngOnInit() {
  }
  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }

  save(row: any): void {
    this.dialogRef.close({isCanceled : false});
  }
}
