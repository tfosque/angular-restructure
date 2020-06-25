import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  data: Observable<Cart[]>;
  @Input() item: any;

  public searchT = '';

  public hasLoaded = false;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
   this.getProducts();
  }

  getInput(input: any) {
    this.searchT = input;
  }

  getProducts() {
    this.api.getProducts()
    .subscribe(res => {
      this.data = res;
      this.hasLoaded = res.length > 0;
      console.log({res});
    });
  }

}
