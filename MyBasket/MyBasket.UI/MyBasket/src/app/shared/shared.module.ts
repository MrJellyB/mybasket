import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavBarComponent } from './component/main-nav-bar/main-nav-bar.component';
import { SideNavBarComponent } from './component/side-nav-bar/side-nav-bar.component';
import { HttpService } from './services/httpService/http.service';

@NgModule({
  declarations: [MainNavBarComponent, SideNavBarComponent],
  imports: [
    CommonModule
  ],
  providers: [HttpService],
  bootstrap: [],
  exports: [MainNavBarComponent, SideNavBarComponent]
})
export class SharedModule { }
