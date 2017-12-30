import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
//import { USERS } from './mock-users';
import { USERS } from '../../mock-users';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersServiceService {

  constructor(private http:Http) { }

  getUsers(): User[] {
    return USERS;
  }

  login(userName:string, password:string) : Promise<Response> {
    // TODO: add here the http call to the server (meanwhile make a mock)
    // return (environment.production) ?
    var headers: Headers =
    new Headers(
    [{
      "Origin": "http://localhost:4200",
      // "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*"
    }]
    );
    var reqOptions: RequestOptions = new RequestOptions({headers: headers});

    this.http.options('http://localhost:8080/login', reqOptions);
    return this.http.post(
      'http://localhost:8080/login',
      {
        "email": userName,
        "password": password
      },
      reqOptions
    ).toPromise<Response>() ;
    // return this.http.get('http://localhost:8080/getUsers', reqOptions).toPromise<Response>();
    // :    console.log('we will add prod in the future');
    // return Promise.resolve(true);
  }

  register(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
