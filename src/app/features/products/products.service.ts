import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from './products.interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll() {
    const url = `https://fakestoreapi.com/products`;
    return this.http.get<Product[]>(url).pipe(
      map(response => response)
    )
  }
}
