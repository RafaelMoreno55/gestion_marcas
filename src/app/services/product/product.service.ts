import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtProductI, ProductD, ProductI, Product } from '@model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API: string = 'https://api-vimeo.herokuapp.com/product/';
  constructor(private httpClient: HttpClient) { }

  getProducts(id_customer: Product) {
    return this.httpClient.get<JwtProductI>(`${this.API}?id_customer=${id_customer}`);
  }

  saveProduct(product: ProductI): Observable <JwtProductI> {
    return this.httpClient.post<JwtProductI>(`${this.API}create`, product)
  }

  updateProduct(product: ProductI): Observable <JwtProductI> {
    return this.httpClient.put<JwtProductI>(`${this.API}update`, product)
  }
}
