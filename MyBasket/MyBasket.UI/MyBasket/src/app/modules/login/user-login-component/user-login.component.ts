import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  errorConnecting:boolean;
  model:any = {};

  constructor(private userService: UsersServiceService) {
    this.errorConnecting = false;
  }

  ngOnInit() {
    this.userService.getUsers();
  }

  // login(email, password) {
  //   event.preventDefault();
  //   this.userService.login(email, password).then(
  //     (result) => {
  //       // TODO: add here a router redirection to main page with the user credentials
  //       // (result) ?
  //       console.log('connected');
  //     },
  //   (err) => {
  //     // Write an error through the alerting service
  //     console.log('error:' + err);
  //   });
  // }

  onSubmit(userloginForm:any, event:Event) {
    event.preventDefault();

    console.log(this.model);

    this.userService.login(this.model.userName, this.model.password).subscribe(
      (result) => {
        // TODO: add here a router redirection to main page with the user credentials
        // (result) ?
        console.log('connected');
      },
    (err) => {
      // Write an error through the alerting service
      console.log('error:' + err);
    });
  }
}
