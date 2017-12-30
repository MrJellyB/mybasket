import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from '../users-service.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(private router: Router,
              private userService: UsersServiceService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    /*
    this.userService.register().then(
      (result) => {
        // if successful
      },
      (err) => {
        // if get error
      });*/
  }
}
