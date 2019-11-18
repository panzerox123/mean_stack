import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list-comp',
  templateUrl: './product-list-comp.component.html',
  styleUrls: ['./product-list-comp.component.css']
})
export class ProductListCompComponent implements OnInit {



  constructor(private cartService: CartService, private router: Router) { }
  products;


  /*cartService.addItem(this.products.products, this.products.quantity, this.products.cost )
  this.cartService.addItem(this.products.products, this.products.quantity, this.products.cost ).subscribe(() => {
    this.router.navigate(['/list']);
  }*/

  addItem(product,cost) {
    this.cartService.addItem(product, cost).subscribe(() => {
      this.router.navigate(['/list']);
    });
    console.log(product+ ' ' + cost);
  }


  ngOnInit() {
    this.products = [
      {
        product: 'Apples',
        cost: '10'
      },
      {
        product: 'Bananas',
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
