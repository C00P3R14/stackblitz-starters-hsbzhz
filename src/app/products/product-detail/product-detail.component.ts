import { Component,Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None //leaks CSS styles up to the component tree
})
export class ProductDetailComponent {
  @Input() name = ''
  @Output() bought = new EventEmitter<string>();

  buy() {
    this.bought.emit(this.name);
  }

  get productName():string {
    console.log(`Get ${this.name}`);
    return this.name
  }

}
