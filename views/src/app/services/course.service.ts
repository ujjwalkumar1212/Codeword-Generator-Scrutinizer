import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private httpclient: HttpClient) { }

    //API calls starts here
    getCourseStudentData(data) {
        return this.httpclient.post("http://localhost:3000/codeword/getcoursestudent", {
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }






}
