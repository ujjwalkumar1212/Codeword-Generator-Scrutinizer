import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CodewordsetService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get(environment.url + "/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewords(data) {
        return this.httpclient.post(environment.url + "/codeword/getCodewords", {
            CodeWordSetKey: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    previewFiles(data) {
        return this.httpclient.post(environment.url + '/codeword/getdataxlsx', data)
    }

    saveCodewordSet(data) {
        return this.httpclient.post(environment.url + "/codeword/addcodewordset",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    saveCodewords(data) {
        return this.httpclient.post(environment.url + "/codeword/addnewcodewords",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    updateCodeword(data) {
        return this.httpclient.post(environment.url + "/codeword/updatecodeword",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteCodewords(data) {
        return this.httpclient.post(environment.url + "/codeword/deleteCodewords",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteCodeWordSet(data) {
        return this.httpclient.post(environment.url + "/codeword/deletecodewordset",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
}
