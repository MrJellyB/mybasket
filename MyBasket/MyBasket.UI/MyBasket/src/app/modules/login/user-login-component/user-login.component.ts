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
  model: any = {};
  isCurrentDetails: string;

  constructor(private userService: UsersServiceService) {
    this.errorConnecting = false;
  }

  ngOnInit() {
    this.userService.getUsers();
  }

  onSubmit(userloginForm:any, event:Event) {
    event.preventDefault();

    console.log(this.model);

    this.userService.login(this.model.userName, this.model.password).subscribe(
      (result) => {
        // TODO: add here a router redirection to main page with the user credentials
        if (result) {
          this.isCurrentDetails = "התחבר למשתמש";
          this.errorConnecting = false;
        }
        else {
          this.isCurrentDetails = "פרטי המשתמש שגויים";
          this.errorConnecting = true;
        }
      },
    (err) => {
      console.log('error:' + err);
      this.errorConnecting = true;
    });
  }
}