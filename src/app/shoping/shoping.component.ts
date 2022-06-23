import { Component, OnInit } from '@angular/core';
import { ItemModel } from './shop.model';

@Component({
  selector: 'app-shoping',
  templateUrl: './shoping.component.html',
  styleUrls: ['./shoping.component.css']
})
export class ShopingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: ItemModel[] = [
    new ItemModel('Smartphone', 'This is good smartphone', 'assets/shop/phone.png')
  ];

}
