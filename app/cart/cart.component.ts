import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart_items;

  constructor(private cartService: CartService,private router: Router) { }

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