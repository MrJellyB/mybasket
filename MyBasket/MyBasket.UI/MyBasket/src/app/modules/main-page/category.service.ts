import { Injectable } from '@angular/core';
import {} from './app'
import { HttpService } from '../../shared/services/httpService/http.service';
import { Category } from '../../shared/entities/Category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private httpService:HttpService) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpService.http.get(
      'http://localhost:8080/getCategories'
    ).map((data) => Category.toCategories(data));
  }

}
