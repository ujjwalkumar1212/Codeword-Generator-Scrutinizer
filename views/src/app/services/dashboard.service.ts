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
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    addNewCourse(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addnewCourse",
            data, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    addCourseStudent(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addcoursestudent",
            data,
            {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    getCourse(data) {
        return this.httpclient.post("http://localhost:3000/codeword/getcourse", {
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }
    chaithanya(data) {
        return this.httpclient.post("http://localhost:3000/codeword/chaithanya", {
            // CourseNamekey: data
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    deletecoursestudent(data) {
        return this.httpclient.post("http://localhost:3000/codeword/deletecoursestudent", {
            // CourseNamekey: data
            EmailKey: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }
    // }

    deleteCourse(data){
        return this.httpclient.post("http://localhost:3000/codeword/deleteCourse",
            data,
            {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }


}