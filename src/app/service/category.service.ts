import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
const API_URL = 'http://localhost:8080/api/'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(API_URL);
  }
  getById(id: string ): Observable<Category[]> {
    return this.httpClient.get<Category[]>(API_URL+`/${id}`);
  }
  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(API_URL,category);
  }
  updateCategory(id: string,category: Category): Observable<Category>{
    return this.httpClient.put<Category>(API_URL+`${id}`,category);
  }
  deleteCategory(id: string): Observable<Category> {
    return this.httpClient.delete<Category>(API_URL+`/${id}`);
  }


}
