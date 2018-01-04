import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { UserLoginComponent } from '../../modules/login/user-login-component/user-login.component';
import { RegisterUserComponent } from '../../modules/login/register-user/register-user.component';
import { SideNavBarComponent } from '../component/side-nav-bar/side-nav-bar.component';
import { MainNavBarComponent } from '../component/main-nav-bar/main-nav-bar.component';
import { MainPageComponent } from '../../modules/main-page/main-page/main-page.component';
import { ProfileBuilderComponent } from '../../modules/login/profile-builder/profile-builder.component'

export const routes:Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'left-nav-bar', component: SideNavBarComponent },
  { path: 'top-nav-bar', component: MainNavBarComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'profile-builder', component: ProfileBuilderComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}
