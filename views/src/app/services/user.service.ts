import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
