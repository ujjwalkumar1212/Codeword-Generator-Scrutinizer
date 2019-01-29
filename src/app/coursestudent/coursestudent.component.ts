import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  Codeword: string;
  Status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Anurag', Codeword: "Cricket", Status: 'Yes'},
  {position: 2, name: 'Ujjawal', Codeword: "Tennis", Status: 'No'},
  {position: 3, name: 'Chaitanya', Codeword: "Batminton", Status: 'Yes'},
  {position: 4, name: 'Naveen', Codeword: "Apple", Status: 'Yes'},
  {position: 5, name: 'Srimai', Codeword: "Banana", Status: 'No'},
  {position: 6, name: 'Vyshnavi', Codeword: "Pink", Status: 'No'},
  {position: 7, name: 'Sreelekha', Codeword: "Blue", Status: 'No'},
  {position: 8, name: 'Sravya', Codeword: "Red", Status: 'Yes'},
  {position: 9, name: 'Haris', Codeword: "Black", Status: 'Yes'},
  {position: 10, name: 'Shiva', Codeword: "Rose", Status: 'Yes'},
];

@Component({
  selector: 'app-coursestudent',
  templateUrl: './coursestudent.component.html',
  styleUrls: ['./coursestudent.component.css']
})
export class CoursestudentComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'Codeword', 'Status'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}
