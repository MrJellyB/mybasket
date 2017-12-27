import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
import * as dummyjson from "dummy-json";
import { USERS } from './mock-users';

@Injectable()
export class UsersServiceService {

  constructor(private http:Http) { }

  getUsers(): User[] {
    return USERS;
  }

  login(userName:string, password:string) {
    HttpModule.
  }

}
