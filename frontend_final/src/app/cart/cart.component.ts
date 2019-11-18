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

  viewCart(){
    this.cartService.getItems().subscribe((data) => {
      this.cart_items = data;
    });
  }

  deleteCart(item){
    this.cartService.deleteItem(item).subscribe(() => {
      console.log('deleted')
    });
    location.reload();

  }

  ngOnInit() {
    this.viewCart()

  }

}