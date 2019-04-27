import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ParamMap } from '@angular/router';
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
import { EditcodewordsetComponent } from '../editcodewordset/editcodewordset.component';
import { DeletecodewordsetComponent } from '../deletecodewordset/deletecodewordset.component';


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
  public it;
  responseArray;
  ack: boolean;
  ackCount: number = 0;
  totalstudents: number = 0;
  courseData: any;
  displayedColumns: string[] = ['email', 'name', 'btn1', 'btn2'];
  dataSource = new MatTableDataSource<PeriodicElement>(null);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute,
    private dashboardService: DashboardService, private courseservice: CourseService, private stdetailsservice: StudentdashboardService, ) {
  }

  ngOnInit(){
    this.fetchData()
  }
  fetchData() {

    // let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let t = params.get('id');
      this.it = t;
    });
    let id = this.it;
    this.dashboardService.chaithanya(id)
      .subscribe((response: any) => {
        this.courseData = response.data;
        console.log("------------------------");
        console.log(this.courseData);
        this.stdetailsservice.countAck(this.courseData.courseNameKey)
          .subscribe(res => {
            this.responseArray = res;
            for (let i = 0; i < this.responseArray.length; i++) {
              if (this.responseArray[i].Acknowledged) { this.ackCount++ }
            };
            this.totalstudents = this.responseArray.length; 

          })

      })
    this.courseservice.getCourseStudentData(id)
      .subscribe((response: any) => {
        this.dataSource = response.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

  }

  
  rowClicked(row: any): void {
    // console.log(row.courseNameKey);
    console.log("cherukuru");
    this.router.navigate(['/dashboard'])
  }



  editContact(element: any): void {
    // this.service.pop
    // const contact = this._contactService.getAllContacts().find(c => c.ID === row.EmailKey);
    const dialogRef = this.dialog.open(EditcodewordsetComponent, {
      width: '500px',
      data : element

    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result && result.isCanceled) return true;
      this.courseservice.updateCourseStudent(result.userData)
        .subscribe((data) => {
          console.log(data);
          console.log('success');
          this.fetchData();
        },
        error => {
          console.log('Error Occured');
        });
    });
    //  this.router.navigate(['/coursestudent', e.EmailKey])


  }


  deleteContact(element: any): void {
 
    const dialogRef = this.dialog.open(DeletecodewordsetComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result && result.isCanceled) return true;
      this.dashboardService.deletecoursestudent(element)
      .subscribe((response: any) => {
        console.log(response)
        this.fetchData();
      })
    });
  }
}
