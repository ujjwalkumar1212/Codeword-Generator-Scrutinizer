import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
<<<<<<< HEAD
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import{ CourseService} from 'src/app/services/course.service'
=======
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

>>>>>>> 14e14ddce4e1d4224e7ad765495127d73152dad8

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
  courseData: any;
  displayedColumns: string[] = ['email', 'name', 'codeword'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private router: Router,private route: ActivatedRoute,private dashboardService: DashboardService,private courseservice: CourseService ) { 
    let id = this.route.snapshot.paramMap.get('id');
    console.log("111111111111111111111");
    console.log(id);
    this.courseservice.getCourseStudentData(id)
      .subscribe((response: any) => {
        console.log(response)
        this.courseData = response.data;
        console.log("22222222222222222");
        console.log(this.courseData);
        console.log(response);
        // this.dataSource = new MatTableDataSource(response.data[id]);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
      })
  }

  ngOnInit() {
    this.fetchCourse();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  fetchCourse() {
    this.dashboardService.getCodewordsList()
    .subscribe((response : any) => {
      this.courseData = response.data;
        console.log(this.courseData)
        })
   }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }

 
  rowClicked(row: any): void {
    // console.log(row.courseNameKey);
    console.log("cherukuru");
    this.router.navigate(['/dashboard'])
  }  
}
