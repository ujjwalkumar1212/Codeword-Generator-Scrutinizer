import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { ViewChild } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
//import { CourseService } from 'src/app/services/course.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { CourseService } from 'src/app/services/course.service'
import { StudentdashboardService } from '../services/studentdashboard.service';

export interface PeriodicElement {
  EmailKey: string;
  StudentName: string;
  Codeword: string;
}

@Component({
  selector: 'app-coursestudent',
  templateUrl: './coursestudent.component.html',
  styleUrls: ['./coursestudent.component.css']
})
export class CoursestudentComponent implements OnInit {
  responseArray;
  ack:boolean;
  ackCount:number=0;
  totalstudents:number=0;
  courseData: any;
  displayedColumns: string[] = ['email', 'name', 'codeword'];
  dataSource = new MatTableDataSource<PeriodicElement>(null);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute,
    private dashboardService: DashboardService, private courseservice: CourseService,private stdetailsservice: StudentdashboardService) {
  }


  ngOnInit() {

   

    let id = this.route.snapshot.paramMap.get('id');
      this.dashboardService.chaithanya(id)
        .subscribe((response: any) => {
          this.courseData = response.data;
          console.log("------------------------");
          console.log(this.courseData);
      this.stdetailsservice.countAck(this.courseData.courseNameKey)    
      .subscribe(res=>{
        
        console.log("*******************");
        console.log(res);
        this.responseArray=res;
        

        
          for(let i=0;i<this.responseArray.length;i++){
              if(this.responseArray[i].Acknowledged){this.ackCount++}
          }
      console.log(this.ackCount);
      console.log(this.responseArray.length);
     this.totalstudents=this.responseArray.length;
        // this.ack= res["Acknowledged"];

        // if(this.ack==true){
        //   this.ackCount++;
        // }        
            
      })

        })
      this.courseservice.getCourseStudentData(id)
      .subscribe((response: any) => {
        this.dataSource = response.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort; 
      })
      
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
