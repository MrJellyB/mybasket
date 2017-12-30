import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login-component/user-login.component';
import { UsersServiceService } from './users-service.service';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [UserLoginComponent, RegisterUserComponent],
  imports: [
    CommonModule
  ],
  providers: [UsersServiceService],
  bootstrap: [],
  exports: [UserLoginComponent, RegisterUserComponent]
})
export class LoginModule { }
