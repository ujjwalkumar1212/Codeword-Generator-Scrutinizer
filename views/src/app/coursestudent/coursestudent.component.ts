import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { CourseService } from 'src/app/services/course.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import{ CourseService} from 'src/app/services/course.service'

export interface PeriodicElement {
  email: string;
  name: string;
  Codeword: string;
}




@Component({
  selector: 'app-coursestudent',
  templateUrl: './coursestudent.component.html',
  styleUrls: ['./coursestudent.component.css']
})
export class CoursestudentComponent implements OnInit {
  courseData: any;
  displayedColumns: string[] = ['email', 'name', 'codeword'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private router: Router,private route: ActivatedRoute,private dashboardService: DashboardService,private courseservice: CourseService ) { 
    let id = this.route.snapshot.paramMap.get('id');
    console.log("111111111111111111111");
    console.log(id);
    // this.courseservice.getCourseStudentData(id)
    this.dashboardService.chaithanya(id)
      .subscribe((response: any) => {
        console.log("22222222222222222");
        console.log(response)
        this.courseData = response.data;
        console.log("22222222222222222");
        console.log(this.courseData);
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data[id]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
      this.courseservice.getCourseStudentData(id)
      .subscribe((response: any) => {
        console.log("22222222222222222");
        console.log(response)
        this.courseData = response.data;
        console.log("22222222222222222");
        console.log(this.courseData);
        console.log(response);
        this.dataSource = new MatTableDataSource(response.data[id]);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
  }

  ngOnInit() {
    // this.fetchCourse();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }
  // fetchCourse() {
  //   this.dashboardService.getCodewordsList()
  //   .subscribe((response : any) => {
  //     this.courseData = response.data;
  //       console.log(this.courseData)
  //       })
  //  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue;
  // }

 
  rowClicked(row: any): void {
    // console.log(row.courseNameKey);
    console.log("cherukuru");
    this.router.navigate(['/dashboard'])
  }  
}
