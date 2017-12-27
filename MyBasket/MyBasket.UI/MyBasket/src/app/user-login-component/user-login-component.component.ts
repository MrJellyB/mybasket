import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-user-login-component',
  templateUrl: './user-login-component.component.html',
  styleUrls: ['./user-login-component.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService: UsersServiceService) { }

  ngOnInit() {
    this.userService.getUsers();
  }

}
