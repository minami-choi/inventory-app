import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `
    <div class="price-display">\${{ price }}</div>
  `
})

// 상품의 가격을 보여주는 컴포넌트
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
