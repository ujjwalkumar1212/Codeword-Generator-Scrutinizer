import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get(environment.url + "/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewordsList() {
        return this.httpclient.get(environment.url + "/codeword/getCourseList", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    addNewCourse(data) {
        return this.httpclient.post(environment.url + "/codeword/addnewCourse",
            data, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    addCourseStudent(data) {
        return this.httpclient.post(environment.url + "/codeword/addcoursestudent",
            data,
            {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    getCourse(data) {
        return this.httpclient.post(environment.url + "/codeword/getcourse", {
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }
    chaithanya(data) {
        return this.httpclient.post(environment.url + "/codeword/chaithanya", {
            // CourseNamekey: data
            CourseNameValue: data
        }, {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    deletecoursestudent(data) {
        return this.httpclient.post(environment.url + "/codeword/deletecoursestudent", {
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
        return this.httpclient.post(environment.url + "/codeword/deleteCourse",
            data,
            {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }

    updateCourse(data){
        return this.httpclient.post(environment.url + "/codeword/updateCourseInfo",
            data,
            {
                headers: {
                    token: window.localStorage.getItem('token')
                }
            })
    }


}