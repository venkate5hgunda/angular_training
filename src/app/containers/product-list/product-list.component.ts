import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() currency: string;

  pList: Product[] = [{
      productId: 1000,
      productName: 'AnImage',
      productPrice: 100,
      productStock: false,
      productImage: 'assets/1_Uzuu7tDhnkV7KUd4N0yfPA1.png'
    },
    {
      productId: 200,
      productName: 'AnImage',
      productPrice: 100000,
      productStock: true,
      productImage: 'assets/1_Uzuu7tDhnkV7KUd4N0yfPA.png'
    },
    {
      productId: 1000,
      productName: 'AnImage',
      productPrice: 10,
      productStock: false,
      productImage: 'assets/1_Uzuu7tDhnkV7KUd4N0yfPA.png'
    }
  ];

  removeItems(item) {
    this.pList = [item];
    alert('message received: ' + item.productName);
  }

  constructor() { }

  ngOnInit() {
  }

}
