import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data = new BehaviorSubject<any>([]);

  // test - private apiUrl = 'https://my.api.mockaroo.com/shopping_cart.json?key=c1a35bd0';
  private apiUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/shopping-cart-ombec/service/api/incoming_webhook/getProducts';

  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
    const obs = this.http.post<any[]>(this.apiUrl, {});

    obs.subscribe((res: any[]) => {
      this.data.next(res);
      console.log({res});
    });
    return this.data;
  }

  updateProduct(update: Cart) {
    const obs = this.http.post<Cart[]>(this.apiUrl, update);
  }
}

