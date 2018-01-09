import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UserLoginComponent } from './user-login-component/user-login.component';
import { UsersServiceService } from './users-service.service';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ProfileBuilderComponent } from './profile-builder/profile-builder.component';
import { AppRoutingModule } from '../../shared/app-routing/app-routing.module';

@NgModule({
  declarations: [UserLoginComponent, RegisterUserComponent, ProfileBuilderComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UsersServiceService],
  bootstrap: [],
  exports: [UserLoginComponent, RegisterUserComponent, ProfileBuilderComponent]
})
export class LoginModule { }
