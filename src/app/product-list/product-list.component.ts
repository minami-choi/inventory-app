import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

// ProductRows 전체를 렌더링하고 현재 선택된 Product를 저장하는 컴포넌트

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // 전달된 product[]
  @Input() productList: Product[];
  // 새 product가 선택될 때마다 현재 product를 출력 
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit() {
  }

}
