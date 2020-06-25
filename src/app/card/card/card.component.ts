import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart.model';;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() data: any[];
 @Input() hasLoaded: boolean;
 @Input() searchT: string;

  constructor(
  ) { }

  ngOnInit() {
  }
}
