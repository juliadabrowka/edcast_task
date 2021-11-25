import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-info',
  templateUrl: './instructor-info.component.html',
  styleUrls: ['./instructor-info.component.sass']
})
export class InstructorInfoComponent implements OnInit {
  @Input() itemTitle: string = '';
  @Input() itemDescription: string = '';
  @Input() itemOptionalText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
