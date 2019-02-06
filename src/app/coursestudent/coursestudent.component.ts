import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';




export interface PeriodicElement {
 
  email: string;
  codeword: string;
  acknowledge: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {email: 's531519@nwmissouri.edu',  codeword: 'Africa', acknowledge: true},
  {email: 's530742@nwmissouri.edu',  codeword: 'Almond', acknowledge: false},
  {email: 's531495@nwmissouri.edu',  codeword: 'Anger', acknowledge: true},
  {email: 's531367@nwmissouri.edu',  codeword: 'America', acknowledge: true},
  {email: 's531496@nwmissouri.edu',  codeword: 'Bravo', acknowledge: false},
  {email: 's531486@nwmissouri.edu',  codeword: 'Bank', acknowledge: true},
  {email: 's531369@nwmissouri.edu',  codeword: 'Bounce', acknowledge: true},
  {email: 's531499@nwmissouri.edu',  codeword: 'Bigger', acknowledge: false},
  {email: 's531500@nwmissouri.edu',  codeword: 'Computer', acknowledge: true},
  {email: 's531372@nwmissouri.edu',  codeword: 'Cancer', acknowledge: true},
  {email: 's530473@nwmissouri.edu',  codeword: 'Chair', acknowledge: false},
  {email: 's531439@nwmissouri.edu',  codeword: 'Center', acknowledge: true},

];

@Component({
  selector: 'app-coursestudent',
  templateUrl: './coursestudent.component.html',
  styleUrls: ['./coursestudent.component.css']
})
export class CoursestudentComponent implements OnInit {

  displayedColumns: string[] = ['email', 'codeword', 'acknowledge'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
