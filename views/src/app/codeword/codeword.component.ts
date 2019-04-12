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

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute, private codewordsetService: CodewordsetService) {
    let id = this.route.snapshot.paramMap.get('id');
    this.codewordsetService.getCodewords([{ CodeWordSetName: id }])
      .subscribe((response: any) => {
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data[id]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  ngOnInit() {
    // this.fetchData();
  }

  // fetchData() {
  //   this.codewordsetService.getCodewordSet()
  //     .subscribe((response: any) => {
  //       let tempDataset = response.data;
  //       this.codewordsetService.getCodewords(tempDataset)
  //         .subscribe((response) => {
  //           let resData = response['data'];
  //           let dataT = []
  //           for (var k in resData) {
  //             dataT.push({
  //               codeWordSetName: k,
  //               count: resData[k].length,
  //               items: resData[k]
  //             })
  //           }
  //           console.log(dataT)
  //           this.dataSource.data = dataT;

  //           this.dataSource.sort = this.sort;
  //           this.dataSource.paginator = this.paginator;
  //         })
  //     })
  //     ;
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCodewordComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.codewordsetService.saveCodewords(result)
        .subscribe((data) => {
          console.log(data);
          console.log('success');
          // this.fetchData();
        },
        error => {
          console.log('Error Occured');
        });
    });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/codewordset'])
  }

}
