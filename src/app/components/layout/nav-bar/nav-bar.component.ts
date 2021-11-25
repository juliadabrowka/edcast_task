import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {
  changeImage: boolean;
  changeImage2: boolean

  constructor() {
    this.changeImage = false
    this.changeImage2 = false
  }

  ngOnInit(): void {
  }

}
