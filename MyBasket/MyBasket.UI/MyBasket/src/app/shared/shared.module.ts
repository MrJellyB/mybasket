import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { HttpService } from './services/httpService/http.service';

@NgModule({
  declarations: [MainNavBarComponent, SideNavBarComponent],
  imports: [
    CommonModule
  ],
  providers: [HttpService],
  bootstrap: [],
  exports: []
})
export class SharedModule { }
