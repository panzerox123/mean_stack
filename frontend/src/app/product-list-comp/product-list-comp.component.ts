import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-comp',
  templateUrl: './product-list-comp.component.html',
  styleUrls: ['./product-list-comp.component.css']
})
export class ProductListCompComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit() {
    this.products = [
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
