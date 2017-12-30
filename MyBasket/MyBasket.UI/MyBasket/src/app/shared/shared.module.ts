import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainNavBarComponent, SideNavBarComponent]
})
export class SharedModule { }
