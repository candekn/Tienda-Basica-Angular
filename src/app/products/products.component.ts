import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  rangePrice: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changePriceValue(value: string){
    this.rangePrice = parseInt(value);
  }

}
