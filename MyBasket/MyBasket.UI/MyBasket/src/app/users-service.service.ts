import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
import { USERS } from './mock-users';
import { Headers, Http } from '@angular/http';

@Injectable()
export class UsersServiceService {

  constructor(private http:Http) { }

  getUsers(): User[] {
    return USERS;
  }

  login(userName:string, password:string) {
    // TODO: add here the http call to the server (meanwhile make a mock)
    // this.http.get()
  }

}
