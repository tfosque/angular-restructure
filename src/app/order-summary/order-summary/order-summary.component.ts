import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Input() data: Cart;
    public subTotal = 0;
    public total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  calcOrderSummary() {
    // loop over each item and add price
  }

}
