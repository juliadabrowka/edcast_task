import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { debounceTime, switchMap } from 'rxjs/operators'
import { SearchAction } from 'src/app/states/search/search.actions';



@Component({
  selector: 'app-instructor-grid',
  templateUrl: './instructor-grid.component.html',
  styleUrls: ['./instructor-grid.component.sass']
})
export class InstructorGridComponent implements OnInit {
  searchForm!: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {
    this.searchForm = fb.group({
    search: new FormControl()
    }
  )}

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.pipe(debounceTime(300)).subscribe(
      (search: string) => {
        this.store.dispatch(new SearchAction({ val: search}))
      }
    )
  }

}
