import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// student dashboard service
@Injectable({
  providedIn: 'root'
})
export class StudentdashboardService {

  constructor(private httpclient: HttpClient) { }

  getStudentDeatils(email){
    console.log("Studentdetails: "+email)
    return this.httpclient.get(environment.url+"/codeword/studentdashboard/"+email)
    
  }
  updateACK(email,courseNameKey){
    console.log("+++++++++++++++++++++++++++++++++++++++++");
    console.log(email);
    console.log(courseNameKey);

    return this.httpclient.get(environment.url+"/codeword/updateACK/" +email+"/"+courseNameKey)
  }

  countAck(courseNameKey){
    return this.httpclient.get(environment.url+"/codeword/coursedetails/"+courseNameKey) 
  }
}
