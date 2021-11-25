import { Component, Output , OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Instructor, ServiceService } from 'src/app/service.service';
import { SearchState } from 'src/app/states/search/search.state';

@Component({
  selector: 'app-instructor-databox',
  templateUrl: './instructor-databox.component.html',
  styleUrls: ['./instructor-databox.component.sass']
})
export class InstructorDataboxComponent implements OnInit {

  //@Select(SearchState.filteredItems) 
  public instructorsList!: Instructor[];
  showReq: boolean = true;

  quoteRequest() {
    this.showReq = !this.showReq;
  }

  constructor(private service: ServiceService) {
    this.instructorsList = this.service.getInstructors()
  }

  ngOnInit(): void {
  }

}
