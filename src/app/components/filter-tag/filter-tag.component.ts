import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.sass']
})
export class FilterTagComponent implements OnInit {
  @Input() tagContent: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
