import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchField = new FormControl('');
  constructor() { }


  ngOnInit(): void {
    this.searchField.valueChanges.subscribe(
      (value) => {
        this.search.emit(value);
      }
    );
  }



}
