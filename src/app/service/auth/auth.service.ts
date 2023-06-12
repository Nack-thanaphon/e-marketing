import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(`${this.apiUrl}/login`, body);
  }
}
