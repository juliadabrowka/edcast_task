import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {
  @Input() pageNum:string = ''
  @Input() pageNum2: string = ''
  @Input() pageNum3: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
