import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title:string = "Life"

  onClick() {
  let par = document.createElement("p")
  let span = document.querySelector("span")
  par.innerText = `Whoohoo!!! I made it work 😆 ${this.title}`
  span?.appendChild(par)
  }
}
