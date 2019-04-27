import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CodewordsetService } from 'src/app/services/codewordset.service';
import { AddCodewordComponent } from 'src/app/add-codeword/add-codeword.component';
import { UpdateCodewordComponent } from '../update-codeword/update-codeword.component';

export interface PeriodicElement {
  codeWords: string;
}

@Component({
  selector: 'app-codeword',
  templateUrl: './codeword.component.html',
  styleUrls: ['./codeword.component.css']
})

export class CodewordComponent implements OnInit {
  displayedColumns: string[] = ['name', 'btn1', 'btn2'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, 
    private router: Router, private route: ActivatedRoute, 
    private codewordsetService: CodewordsetService) {
   this.fetchData();
  }

  ngOnInit() {
    // this.fetchData();
  }

  fetchData() {
    let id = this.route.snapshot.paramMap.get('id');
    this.codewordsetService.getCodewords([{ CodeWordSetName: id }])
      .subscribe((response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data[id]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  openDialog(): void {
    let id = this.route.snapshot.paramMap.get('id');
    const dialogRef = this.dialog.open(AddCodewordComponent, {
      width: '500px',
      data : id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result && result.isCanceled) return true;
      this.fetchData();
      // this.codewordsetService.saveCodewords(result)
      //   .subscribe((data) => {
      //     console.log(data);
      //     console.log('success');
      //     // this.fetchData();
      //   },
      //   error => {
      //     console.log('Error Occured');
      //   });
    });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/codewordset'])
  }
  deleteCodewords(row){
    this.codewordsetService.deleteCodewords(row)
    .subscribe((data) => {
      this.fetchData();
    },
    error => {
      console.log('Error Occured');
    });
  }

  editCodeword(row){
    console.log(row)
    const dialogRef = this.dialog.open(UpdateCodewordComponent, {
      width: '500px',
      data : row
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result.isCanceled) return true;
      this.codewordsetService.updateCodeword(result.userData)
        .subscribe((data) => {
          console.log(data);
          console.log('success');
          this.fetchData();
        },
        error => {
          console.log('Error Occured');
        });
    });
  }

}
