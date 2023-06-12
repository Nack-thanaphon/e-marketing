import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { environment } from '../../../app/environment/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  private products$: Observable<any[]> = of([]);
  private token: string = 'teste';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    // if (!this.products$) {
      this.products$ = this.fetchProducts().pipe(
        shareReplay(1),
        catchError((error) => {
          console.error('Error fetching products:', error);
          return of([]);
        })
      );
    // }
    // console.log('products$:', this.products$);
    return this.products$;
  }
  

  private fetchProducts(): Observable<any[]> {
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<any[]>(`${this.apiUrl}/products`, { headers });
  }
}
