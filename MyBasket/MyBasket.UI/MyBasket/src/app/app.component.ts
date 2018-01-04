import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

import { UserLoginComponent } from '../app/modules/login/user-login-component/user-login.component';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'מערכת הסל שלי';
  username = 'test';
  email : Input;

}
