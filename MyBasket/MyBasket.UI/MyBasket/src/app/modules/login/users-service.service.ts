import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
//import { USERS } from './mock-users';
import { USERS } from '../../mock-users';
import { Headers, Http, Response } from '@angular/http';
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
    return this.http.post(
      'localhost:8080/login',
      {
        "email": userName,
        "password": password
      }
    ).toPromise<Response>() ;
    // :    console.log('we will add prod in the future');
    // return Promise.resolve(true);
  }

  register(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
