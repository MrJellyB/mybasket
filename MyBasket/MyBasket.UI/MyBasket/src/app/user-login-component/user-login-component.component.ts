import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user-login-component',
  templateUrl: './user-login-component.component.html',
  styleUrls: ['./user-login-component.component.css']
})
export class UserLoginComponent implements OnInit {

  errorConnecting:boolean;

  constructor(private userService: UsersServiceService) { 
    this.errorConnecting = false;
  }

  ngOnInit() {
    this.userService.getUsers();
  }

  login(email, password) {
    this.userService.login(email, password).then(
      (result) => {
        // TODO: add here a router redirection to main page with the user credentials
        // (result) ? 
      },
    (err) => {
      // Write an error through the alerting service

    });
  }
}
