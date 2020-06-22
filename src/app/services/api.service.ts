import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

export interface Cart {
  id: number;
  cart_title: string;
  product: {
    name: string;
    price: string;
    item_num: string;
    sale_price: string;
    url: string;
    color: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = new BehaviorSubject<any>([]);

  private apiUrl = 'https://my.api.mockaroo.com/shopping_cart.json?key=c1a35bd0';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    const obs = this.http.get<Cart[]>(this.apiUrl);

    obs.subscribe((res: Cart[]) => {
      // console.log({ res });
      this.data.next(res);
    });
    return this.data;
  }
}
