import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() pData: Product = null;
  @Output() btnClick = new EventEmitter();
  @Input() currCode: string = 'INR';

  fallbackImageUrl: string = 'assets/1a6d6f295da9f97bb576ff486ed81389_400x400.png';

  constructor() { }

  itemClicked() {
    alert('Added to Cart');
    this.btnClick.emit({ data: this.pData });
  }

  ngOnInit() {
  }

}
