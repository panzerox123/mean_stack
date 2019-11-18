import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  uri = 'http://localhost:9000';
  

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(`${this.uri}/view_cart`);
  }

  addItem(product, cost) {
    const cart = {
      product: product,
      cost: cost
  
    };
    return this.http.post(`${this.uri}/add_to_cart`, cart);
  }

  deleteItem(id) {
    return this.http.delete(`${this.uri}/remove_from_cart?item=${id}`);
  }
}

