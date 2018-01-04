import { Injectable } from '@angular/core';
import {} from './app'
import { HttpService } from '../../shared/services/httpService/http.service';

@Injectable()
export class CategoryService {

  constructor(private httpService:HttpService) { }

}
