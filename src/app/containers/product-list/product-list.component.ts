import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  @Input() currency: string;

  cService$: Subscription;

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

  constructor(private productService: ProductService, private cService: CurrencyService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('success', data);
        const dataList = data as Product[];
        this.pList = [...this.pList, ...dataList];
        // this.pList = data as Product[];
      },
      (err) => {
        console.log('error', err);
      }
    );
    this.getCurrencyCode();
  }

  ngOnDestroy() {
    this.cService$.unsubscribe();
  }

  getCurrencyCode() {
    this.cService$ = this.cService.currencyObservable.subscribe(
      (code) => this.currency = code as string,
      (err) => console.log('error', err)
    );
  }
}
