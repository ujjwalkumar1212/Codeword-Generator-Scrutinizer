import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { Router } from '@angular/router';
import { CodewordsetService } from 'src/app/services/codewordset.service';


export interface PeriodicElement {
  codeWordSetName: string;
  count: number;
  items?: any
}

@Component({
  selector: 'app-codewordset',
  templateUrl: './codewordset.component.html',
  styleUrls: ['./codewordset.component.css']
})

export class CodewordsetComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count', 'btn'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private router: Router, private codewordsetService: CodewordsetService) { }

  ngOnInit() {
    this.fetchData();
  }

  // Get call
  fetchData() {
    this.codewordsetService.getCodewordSet()
      .subscribe((response: any) => {
        let tempDataset = response.data;
        this.codewordsetService.getCodewords(tempDataset)
          .subscribe((response) => {
            let resData = response['data'];
            let dataT = []
            for (var k in resData) {
              dataT.push({
                codeWordSetName: k,
                count: resData[k].length,
                items: resData[k]
              })
            }
            console.log(dataT)
            this.dataSource.data = dataT;

            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          })
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.codewordsetService.saveCodewordSet(result)
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

  rowClicked(row: any): void {
    console.log(row.codeWordSetName);
    this.router.navigate(['/codeword', row.codeWordSetName])
  }
}
