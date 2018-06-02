import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

// ProductRows 전체를 렌더링하고 현재 선택된 Product를 저장하는 컴포넌트

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  // 전달된 product[]
  // input의 매개변수는 외부 컴포넌트에서 app-product-list의 input바인딩할 변수로 쓰임
  // 만약 생략된다면 이 컴포넌트에서 쓰일 productList와 같을 경우..
  @Input('productList-out') productList: Product[];
  // 새 product가 선택될 때마다 현재 product를 출력 
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
    console.log("ProductListComponent", product)
  }

  isSelected(product: Product):boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;  }

  ngOnInit() {
    console.log("ProductListComponent", this.productList)

  }

}
