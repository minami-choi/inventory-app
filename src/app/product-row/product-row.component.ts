import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html'
})

// 하나의 상품을 보여주는 컴포넌트
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass ='item'
  constructor() { }

  ngOnInit() {
  }

}
