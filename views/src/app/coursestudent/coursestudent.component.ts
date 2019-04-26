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
import{ DeletecodewordsetComponent} from '../deletecodewordset/deletecodewordset.component';


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
  ack:boolean;
  ackCount:number=0;
  totalstudents:number=0;
  courseData: any;
  displayedColumns: string[] = ['email', 'name', 'codeword', 'btn1','btn2'];
  dataSource = new MatTableDataSource<PeriodicElement>(null);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute,
    private dashboardService: DashboardService, private courseservice: CourseService,private stdetailsservice: StudentdashboardService,) {
  }


  ngOnInit() {
    
   

    // let id = this.route.snapshot.paramMap.get('id');
 this.route.paramMap.subscribe((params:ParamMap)=>{
let t=params.get('id');
this.it=t;
});











let id=this.it;
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

delete(id){
  // let id=element.EmailKey;

  console.log("cherkuru +2222222")
  this.dashboardService.deletecoursestudent(id)
    .subscribe((response: any) => {
    console.log(response)
      console.log("cherkuru")
      console.log(id);
       
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
     
    
    });
    console.log(element.EmailKey);
    //  this.router.navigate(['/coursestudent', e.EmailKey])
   
    
  }

  
  deleteContact(element: any): void {
   let id=element.EmailKey;
   let d=element.courseNameKey
   console.log(id);
   this.delete(id);
   const dialogRef = this.dialog.open(DeletecodewordsetComponent, {
    width: '500px',
   
  
  });
    this.router.navigate(['/coursestudent', element.courseNameKey])
  // this.popup.options= {
  //   color: "red"
    
  //    }
    
  //    this.popup.show();
  }
}
