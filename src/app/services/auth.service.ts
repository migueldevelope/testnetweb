import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewInputAuthentication } from '../models/view-input-authentication';
import { ViewGetAuthentication } from '../models/view-get-authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials: ViewInputAuthentication): Observable<ViewGetAuthentication> {
    return this.http.post<ViewGetAuthentication>('/api/login', credentials);
  }
}