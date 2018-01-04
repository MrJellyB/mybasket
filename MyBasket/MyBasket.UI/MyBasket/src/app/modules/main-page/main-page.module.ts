import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryService } from './category.service';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { SharedModule } from '../../shared/shared.module'
import { HttpService } from '../../shared/services/httpService/http.service';

@NgModule({
  declarations: [MainPageComponent, ProductDetailsComponent],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [CategoryService, HttpService],
  bootstrap: [],
  exports: []
})
export class MainPageModule { }
