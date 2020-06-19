import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public imgLink =
  'https://images.homedepot-static.com/productImages/3c2925f0-8d7f-4f95-a096-25a663340d93/svn/charcoal-gaf-roof-shingles-0201180-64_1000.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
