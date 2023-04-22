import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class AdsPaymentApi {
  private apiUrl = environment.apiUrl;
  private token = 'testToken';

  constructor(private http: HttpClient) {}

  getSomeData() {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this.http.get(`${this.apiUrl}/paymentTotal`, { headers });
  }
}
