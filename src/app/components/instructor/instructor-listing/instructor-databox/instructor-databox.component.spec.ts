import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDataboxComponent } from './instructor-databox.component';

describe('InstructorDataboxComponent', () => {
  let component: InstructorDataboxComponent;
  let fixture: ComponentFixture<InstructorDataboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDataboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDataboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
