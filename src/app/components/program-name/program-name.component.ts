import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-name',
  templateUrl: './program-name.component.html',
  styleUrls: ['./program-name.component.sass']
})
export class ProgramNameComponent implements OnInit {
  @Input() programTitle:string = '';
  @Input() programPrice!:string;
  @Input() greyedText: string = '';
  @Input() blackText: string = '';
  @Input() from: string = '';
  @Input() to: string = '';
  @Input() fromDate: string = '';
  @Input() toDate: string = '';
  @Input() programDescription: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
