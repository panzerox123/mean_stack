import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items;

  constructor() { }

  ngOnInit() {
    this.cart_items = [
      {
        product: 'Apple',
        cost: '10'
      },
      {
        product: 'Banana',
        cost: '20'
      },
      {
        product: 'Tomatoes',
        cost: '30'
      },
      {
        product: 'Potatoes',
        cost: '40'
      }
    ];

  }

}
