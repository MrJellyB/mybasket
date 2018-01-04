import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryService } from './category.service';
import { SharedModule } from '../../shared/shared.module'
import { HttpService } from '../../shared/services/httpService/http.service';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [CategoryService, HttpService],
  bootstrap: [],
  exports: []
})
export class MainPageModule { }
