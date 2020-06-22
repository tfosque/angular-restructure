import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService, Cart } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data: Observable<Cart[]>;

  title = 'zurb-foundation-app';

  public hasLoaded = false;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    this.api.getProducts()
    .subscribe(res => {
      this.data = res;
      this.hasLoaded = res.length > 0;
    });
  }
}
