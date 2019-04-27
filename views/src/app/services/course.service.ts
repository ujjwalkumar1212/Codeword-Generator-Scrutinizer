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
            // courseNameKey: data
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    getCoursesData() {
        return this.httpclient.get("http://localhost:3000/codeword/getCourseList", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteStudent(data){
        return this.httpclient.post("http://localhost:3000/codeword/deletecoursestudent", data, {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
    
    updateCourseStudent(data) {
        return this.httpclient.post("http://localhost:3000/codeword/updatecoursestudent", data, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
     }
    
    editCourse() {
        
    } 
     
    




}
