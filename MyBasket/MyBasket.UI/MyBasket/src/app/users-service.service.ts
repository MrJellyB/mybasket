import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
import * as dummyjson from "dummy-json";
import { USERS } from './mock-users'

@Injectable()
export class UsersServiceService {

  getUsers(): User[] {
    return USERS;
  }

}
