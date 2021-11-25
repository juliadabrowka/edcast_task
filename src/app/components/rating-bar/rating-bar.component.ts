import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.sass']
})
export class RatingBarComponent implements OnInit {
  public searchGroup!: FormGroup;
  searchResults: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchGroup = this.fb.group({
      'search': ''
    })
  }

  onChanges(): void {
    this.searchGroup.get('search')?.valueChanges.pipe(
      debounceTime(300),
      switchMap((value: string) =>
      this.searchResults)
    )
  }

}
