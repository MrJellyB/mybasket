import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
//import { USERS } from './mock-users';
import { USERS } from '../../mock-users';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UsersServiceService {

  constructor(private http:Http) { }

  getUsers(): User[] {
    return USERS;
  }

  login(userName:string, password:string) : Promise<boolean> {
    // TODO: add here the http call to the server (meanwhile make a mock)
    // this.http.get()
    return Promise.resolve(true);
  }

}
