import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';


export interface PeriodicElement {
  email: string;
  name: string;
  codeword: string;
}

const ELEMENT_DATA: PeriodicElement[] = [{
  email: "sspennock0@addthis.com",
  name: "Sonnie Spennock",
  codeword: "Myanmar"
}, {
  email: "lhacking1@msn.com",
  name: "Letisha Hacking",
  codeword: "China"
}, {
  email: "dminet2@google.fr",
  name: "Dorise Minet",
  codeword: "Poland"
}, {
  email: "ssolomonides3@ucoz.ru",
  name: "Selestina Solomonides",
  codeword: "Brazil"
}, {
  email: "ahenzley4@google.com.br",
  name: "Anthiathia Henzley",
  codeword: "Portugal"
}, {
  email: "mkleinplatz5@w3.org",
  name: "Marjie Kleinplatz",
  codeword: "Philippines"
}, {
  email: "ewilmington6@sogou.com",
  name: "Erika Wilmington",
  codeword: "Thailand"
}, {
  email: "alafflin7@miitbeian.gov.cn",
  name: "Angie Lafflin",
  codeword: "Indonesia"
}, {
  email: "rwharton8@apache.org",
  name: "Randall Wharton",
  codeword: "Ukraine"
}, {
  email: "bodreain9@scribd.com",
  name: "Brande O'Dreain",
  codeword: "China"
}]


@Component({
  selector: 'app-coursestudent',
  templateUrl: './coursestudent.component.html',
  styleUrls: ['./coursestudent.component.css']
})
export class CoursestudentComponent implements OnInit {

  displayedColumns: string[] = ['email', 'name', 'codeword'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, 
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService) { 
      let id = this.route.snapshot.paramMap.get('id');      
      this.courseService.getCourseStudentData([{ CourseNameValue: id }])
      .subscribe((response : any) => {
         console.log(response);
         
        //  this.displayedColumns = response;
         this.dataSource = new MatTableDataSource(response.data[id]);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
        })
    }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

 
  rowClicked(row: any): void {
    console.log(row);
    this.router.navigate(['/dashboard'])
  }  
}
