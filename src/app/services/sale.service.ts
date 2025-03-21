import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewInputSale } from '../models/view-input-sale';
import { ViewGetSale } from '../models/view-get-sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'api/sale';

  constructor(private http: HttpClient) { }

  create(input: ViewInputSale): Observable<ViewGetSale> {
    return this.http.post<ViewGetSale>(this.apiUrl, input);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  get(id: number): Observable<ViewGetSale> {
    return this.http.get<ViewGetSale>(`${this.apiUrl}/${id}`);
  }

  list(filter: any): Observable<ViewGetSale[]> {
    return this.http.get<ViewGetSale[]>(this.apiUrl, { params: filter });
  }
}