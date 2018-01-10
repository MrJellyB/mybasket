import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavBarComponent } from './component/main-nav-bar/main-nav-bar.component';
import { SideNavBarComponent } from './component/side-nav-bar/side-nav-bar.component';
import { HttpService } from './services/httpService/http.service';
import { TitleBarComponent } from './component/title-bar/title-bar/title-bar.component';
import { CategoryService } from '../modules/main-page/category.service';
import { AuthService } from './services/auth/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainNavBarComponent, SideNavBarComponent, TitleBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [HttpService, CategoryService, AuthService],
  bootstrap: [],
  exports: [MainNavBarComponent, SideNavBarComponent, TitleBarComponent]
})
export class SharedModule { }
