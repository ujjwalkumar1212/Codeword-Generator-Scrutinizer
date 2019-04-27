import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-codeword',
  templateUrl: './update-codeword.component.html',
  styleUrls: ['./update-codeword.component.css']
})
export class UpdateCodewordComponent implements OnInit {
  addslot = {}
  constructor(public dialogRef: MatDialogRef<UpdateCodewordComponent>, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data) { 
    this.addslot = { ...data}
    console.log(this.addslot)
  }

  ngOnInit() {
  }

  onNoClick(data): void {

    this.dialogRef.close({isCanceled : true});
    
  }
  login(data){
    console.log('save called')
    if(data.valid){
      data.isCanceled = false;
      data.userData = this.addslot
      this.dialogRef.close(data);
    }
  }

}
