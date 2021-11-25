import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  @Input() name: string = '';
  @Input() rating: string = '';
  @Input() date: string = '';
  @Input() comment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
