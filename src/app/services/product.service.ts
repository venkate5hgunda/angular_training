import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const endpoint = 'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
    return this.http.get(endpoint);
  }
}
