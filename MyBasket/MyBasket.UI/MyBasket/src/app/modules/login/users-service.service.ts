import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user-login-component/User';
//import { USERS } from './mock-users';
import { USERS } from '../../mock-users';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UsersServiceService {

  constructor(private http:Http) { }

  getOptions(): any {
    let header: HttpHeaders = new HttpHeaders().append("Content-Type", "application/json;charset=utf-8");
    let headers: Headers =
      new Headers(
        [{
          "Origin": "http://localhost:420dsada0",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*"
        }]
      );
    let reqOptions: RequestOptions = new RequestOptions();
    reqOptions.headers = headers;
    return reqOptions;
  }

  getUsers(): User[] {
    return USERS;
  }

  login(userName:string, password:string) : Observable<Response> {
    let body = new FormData();
    body.append('email', userName);
    body.append('password', password);
    return this.http.post(
      'http://localhost:8080/login',
      {
        "email": userName,
        "password": password
      },
      this.getOptions()
    ).map((data) => data.json());
  }

  register(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
