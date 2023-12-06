import { Component,Input,Output, EventEmitter,ChangeDetectionStrategy,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() name = ''
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.name} in the constructor`)
  }

  buy() {
    this.bought.emit(this.name);
  }

  get productName():string {
    console.log(`Get ${this.name}`);
    return this.name
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnit`)
  }

}
