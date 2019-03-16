import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpclient: HttpClient) { }
  
  validateEmail(data) {
    return this.httpclient.post("http://localhost:3000"
        + '/codeword/validateEmail', data)
  }
    signin(data) {
      return this.httpclient.post("http://localhost:3000"
          + '/codeword/signin', data)
    }

    signup(data){
      return this.httpclient.post("http://localhost:3000"
      + '/codeword/signup', data) 
    }

    // getCodewordSet(){
    //   return this.httpclient.get("http://localhost:3000/getCodewordSet")
    // }

    resetpassword(password: string, token: string){

      const headers = new HttpHeaders({
        'token' : token
      });

      return this.httpclient.post("http://localhost:3000/codeword/resetpassword", {password}, {headers})
    }

    resetpasswordemail (username: string) {
      return this.httpclient.post("http://localhost:3000/codeword/reset",{username}, { responseType: 'text' })
    }
}