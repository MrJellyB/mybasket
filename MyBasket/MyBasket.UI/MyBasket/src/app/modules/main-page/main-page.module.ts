import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryService } from './category.service';
import { SharedModule } from '../../shared/shared.module'
import { HttpService } from '../../shared/services/httpService/http.service';
import { TitleBarComponent } from '../../shared/component/title-bar/title-bar/title-bar.component';

@NgModule({
  declarations: [MainPageComponent, TitleBarComponent],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [CategoryService, HttpService],
  bootstrap: [],
  exports: []
})
export class MainPageModule { }
