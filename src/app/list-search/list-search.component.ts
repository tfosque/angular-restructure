import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {
  form: any = {};

  constructor() {
    this.form.searchTxt = '';
  }

  ngOnInit(): void {
  }

  submit(Form: NgForm) {
    console.log('form.value', Form.value);
    console.log({ Form });

    /* if (Form.invalid){
      return;
    } */
    alert('Performing Searach');
  }

}
