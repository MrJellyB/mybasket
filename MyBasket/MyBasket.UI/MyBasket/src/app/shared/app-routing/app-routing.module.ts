import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from '../../modules/login/user-login-component/user-login.component';
import { RegisterUserComponent } from '../../modules/login/register-user/register-user.component';

export const routes:Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterUserComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
