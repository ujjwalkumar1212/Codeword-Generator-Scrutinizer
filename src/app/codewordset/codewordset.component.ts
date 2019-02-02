import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from 'src/app/add-user/add-user.component';
import { Router } from '@angular/router';

export interface PeriodicElement {
  codeWordSetName: string;
  count: number;
}

const ELEMENT_DATA: PeriodicElement[] = [{
  codeWordSetName: "LOESTRIN 21 1.5/30",
  count: 92
}, {
  codeWordSetName: "Indocyanine green",
  count: 86
}, {
  codeWordSetName: "Promethazine Hydrochloride and Dextromethorphan Hydrobromide",
  count: 98
}, {
  codeWordSetName: "Colgate",
  count: 50
}, {
  codeWordSetName: "CAULOPHYLLUM THALICTROIDES",
  count: 76
}, {
  codeWordSetName: "Body Luxuries Strawberry Scented Waterless Anti Bacterial Hand gel",
  count: 60
}, {
  codeWordSetName: "Infla",
  count: 64
}, {
  codeWordSetName: "GELNIQUE",
  count: 92
}, {
  codeWordSetName: "Coconut",
  count: 88
}, {
  codeWordSetName: "Venlafaxine Hydrochloride",
  count: 81
}];

@Component({
  selector: 'app-codewordset',
  templateUrl: './codewordset.component.html',
  styleUrls: ['./codewordset.component.css']
})
export class CodewordsetComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count', 'btn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
      });
  }

  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/codewords'])
  }
}
