import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-instructor-details-box',
  templateUrl: './instructor-details-box.component.html',
  styleUrls: ['./instructor-details-box.component.sass']
})

export class InstructorDetailsBoxComponent implements OnInit {
  @Input() searchText: string = '';
  showReq: boolean = true;

  quoteRequest() {
    this.showReq = !this.showReq;
  }

  constructor() { }

  ngOnInit(): void {
    };
  }

