import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get("http://localhost:3000/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewordsList() {
        return this.httpclient.get("http://localhost:3000/codeword/getCourseList", {
            // CodeWordSetKey: data
        //   } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    addNewCourse(data){
        return this.httpclient.post("http://localhost:3000/codeword/addnewCourse",{
            data: {
                token: window.localStorage.getItem('token')                
            }
        })
    }

    addCourseStudent(data){
        return this.httpclient.post("http://localhost:3000/codeword/addcoursestudent",{
            data: {
                token: window.localStorage.getItem('token')                
            }
        })
    }

    


}