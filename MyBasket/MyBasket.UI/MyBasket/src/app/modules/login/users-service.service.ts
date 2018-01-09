import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user-login-component/User';
//import { USERS } from './mock-users';
import { USERS } from '../../mock-users';
import { Headers, Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpService } from '../../shared/services/httpService/http.service';

@Injectable()
export class UsersServiceService {

  constructor(private http: Http, private httpService: HttpService) { }

  login(userName:string, password:string) : Observable<Response> {
    return this.http.post(
      'http://localhost:8080/login',
      {
        "email": userName,
        "password": password
      },
      this.httpService.getOptions()
    ).map((data) => {

      // TODO: we need to respond here a token from the server
      if(data && data.ok) {
        localStorage.setItem('currentUser', userName);
      }

      return data.json();
    });
  }

  register(data: any): Observable<Response> {
    return this.http.post('http://localhost:8080/register',
      { data },
      this.httpService.getOptions()).map((data) => data.json());
  }
}
