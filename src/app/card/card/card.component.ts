import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
 @Input() data: Observable<Cart[]>;
 // @Input() hasLoaded: Observable<boolean>;
 @Input() hasLoaded: boolean;

  constructor(
  ) { }

  ngOnInit() {
   /*  this.hasLoaded.subscribe(res => {
      console.log({res});
    }); */
    console.log(this.hasLoaded);

  }
}
