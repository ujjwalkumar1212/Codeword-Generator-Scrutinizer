import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CodewordsetService {


    constructor(private httpclient: HttpClient) { }

    getCodewordSet() {
        return this.httpclient.get("http://localhost:3000/codeword/getcodewordset", {
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    getCodewords(data) {
        return this.httpclient.post("http://localhost:3000/codeword/getCodewords", {
            CodeWordSetKey: data
          } ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    previewFiles(data) {
        return this.httpclient.post('http://localhost:3000/codeword/getdataxlsx', data)
    }

    saveCodewordSet(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addcodewordset",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    saveCodewords(data) {
        return this.httpclient.post("http://localhost:3000/codeword/addnewcodewords",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    updateCodeword(data) {
        return this.httpclient.post("http://localhost:3000/codeword/updatecodeword",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteCodewords(data) {
        return this.httpclient.post("http://localhost:3000/codeword/deleteCodewords",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }

    deleteCodeWordSet(data) {
        return this.httpclient.post("http://localhost:3000/codeword/deletecodewordset",data ,{
            headers: {
                token: window.localStorage.getItem('token')
            }
        })
    }
}
