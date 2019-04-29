import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private httpclient: HttpClient) { }

    //API calls starts here
    getCourseStudentData(data) {
        return this.httpclient.post(environment.url + "/codeword/getcoursestudent", {
            // courseNameKey: data
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    getCoursesData() {
        return this.httpclient.get(environment.url + "/codeword/getCourseList", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteStudent(data){
        return this.httpclient.post(environment.url + "/codeword/deletecoursestudent", data, {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
    
    updateCourseStudent(data) {
        return this.httpclient.post(environment.url + "/codeword/updatecoursestudent", data, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
     }
    
    editCourse() {
        
    } 
     
    




}
