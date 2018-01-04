import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryService } from './category.service';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule, SharedModule
  ],
  providers: [CategoryService],
  bootstrap: [],
  exports: []
})
export class MainPageModule { }
