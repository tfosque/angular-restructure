import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
@Input() hasLoaded: any;

  constructor() { }

  ngOnInit(): void {
    // console.log( this.hasLoaded)
  }

}
