import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../app/environment/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private products: any[] = [];
  private token: string = 'teste';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    if (this.products.length === 0) {
      return this.fetchProducts().pipe(
        tap((products) => {
          this.products = products;
        }),
        catchError((error) => {
          console.error('Error fetching products:', error);
          return of([]);
        })
      );
    } else {
      return of(this.products);
    }
  }

  private fetchProducts(): Observable<any[]> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
  }
}
