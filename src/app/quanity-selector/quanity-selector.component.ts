import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quanity-selector',
  templateUrl: './quanity-selector.component.html',
  styleUrls: ['./quanity-selector.component.scss']
})
export class QuanitySelectorComponent implements OnInit {
  @Input() qty: any;

  constructor() { }

  ngOnInit(): void {
    console.log('product:qty:', this.qty);
  }

  increase() {
    this.qty = this.qty + 1;
  }

  decrease() {
    if (this.qty === 0) {
      return;
    }
    this.qty = this.qty - 1;
  }

}
