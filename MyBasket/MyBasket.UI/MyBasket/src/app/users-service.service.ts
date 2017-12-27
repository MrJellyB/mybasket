import { Injectable } from '@angular/core';
import { User } from './user-login-component/User';
import * as dummyjson from "dummy-json";

@Injectable()
export class UsersServiceService {

  getUsers(): User[] {
    return dummyjson.parse('./data/mock.data');
  }

}
