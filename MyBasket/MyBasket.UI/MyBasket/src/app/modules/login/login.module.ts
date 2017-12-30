import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login-component/user-login.component';
import { UsersServiceService } from './users-service.service';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [
    CommonModule
  ],
  providers: [UsersServiceService],
  bootstrap: [],
  exports: [UserLoginComponent]
})
export class LoginModule { }
