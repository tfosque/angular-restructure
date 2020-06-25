import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {
  // @Output() searchText = new EventEmitter();
  // @Output() searchT: EventEmitter<string> = new EventEmitter();
  @Output() searchT = new EventEmitter<string>();

  form: any = {};

  constructor() {
    this.form.searchTxt = '';
  }

  ngOnInit(): void {
  }

  updateTxtInput(input: any) {
    this.searchT.emit(input.target.value);
    // console.log('updateTxt:Event:', input.target.value);
  }

  submit(Form: NgForm) {
    console.log('form.value', Form.value);
    if (Form.invalid){
      return;
    }
    alert('Performing Search Filter');
  }

}
