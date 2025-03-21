import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewInputProduct } from '../models/view-input-product';
import { ViewGetProduct } from '../models/view-get-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/product';

  constructor(private http: HttpClient) { }

  create(input: ViewInputProduct): Observable<ViewGetProduct> {
    return this.http.post<ViewGetProduct>(this.apiUrl, input);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  get(id: number): Observable<ViewGetProduct> {
    return this.http.get<ViewGetProduct>(`${this.apiUrl}/${id}`);
  }

  list(filter: any): Observable<ViewGetProduct[]> {
    return this.http.get<ViewGetProduct[]>(this.apiUrl, { params: filter });
  }
}