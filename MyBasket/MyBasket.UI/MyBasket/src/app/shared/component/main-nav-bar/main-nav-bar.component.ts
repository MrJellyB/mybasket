import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../modules/main-page/category.service';
import { Category } from '../../entities/Category';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit {

  private categories:Category[];
  constructor(private categortService: CategoryService) { }

  getCategories(): Category[] {
    let categories: Category[];
    this.categortService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log("error on getting categories:" + error);
        this.categories = [];
      }
    );

    return categories;
  }

  ngOnInit() {
    this.getCategories();
  }

}
