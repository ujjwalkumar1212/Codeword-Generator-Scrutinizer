import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpclient: HttpClient) { }
  
  validateEmail(data) {
    return this.httpclient.post(environment.url   + '/codeword/validateEmail', data)
  }
    signin(data) {
      return this.httpclient.post(environment.url     + '/codeword/signin', data)
    }

    signup(data){
      return this.httpclient.post(environment.url + '/codeword/signup', data) 
    }

    // getCodewordSet(){
    //   return this.httpclient.get(environment.url + "/getCodewordSet")
    // }

    resetpassword(password: string, token: string){

      const headers = new HttpHeaders({
        'token' : token
      });

      return this.httpclient.post(environment.url + "/codeword/resetpassword", {password}, {headers})
    }

    resetpasswordemail (username: string) {
      return this.httpclient.post(environment.url + "/codeword/reset",{username}, { responseType: 'text' })
    }
}