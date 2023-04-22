import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
  
export class AdsPaymentApi {

  private apiUrl = 'http://localhost:8765/api';
  private token = 'testToken';

  constructor(private http: HttpClient) {}

  getSomeData() {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${this.apiUrl}/paymentTotal`, { headers });
  }


}
