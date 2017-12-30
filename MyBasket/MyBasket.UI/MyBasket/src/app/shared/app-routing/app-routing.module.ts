import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from '../../modules/login/user-login-component/user-login.component'

export const routes:Routes = [
  { path: 'login', component: UserLoginComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
