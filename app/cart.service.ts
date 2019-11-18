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

  addItem(product, quantity, cost) {
    const cart = {
      product: product,
      quantity: quantity,
      cost: cost
  
    };
    return this.http.post(`${this.uri}/add_to_cart`, cart);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/remove_from_cart/${id}`);
  }
}

