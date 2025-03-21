import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewInputUser } from '../models/view-input-user';
import { ViewGetUser } from '../models/view-get-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'api/user';

  constructor(private http: HttpClient) { }

  create(input: ViewInputUser): Observable<any> {
    return this.http.post(this.apiUrl, input);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  get(id: number): Observable<ViewGetUser> {
    return this.http.get<ViewGetUser>(`${this.apiUrl}/${id}`);
  }

  list(filter: any): Observable<ViewGetUser[]> {
    return this.http.get<ViewGetUser[]>(this.apiUrl, { params: filter });
  }
}