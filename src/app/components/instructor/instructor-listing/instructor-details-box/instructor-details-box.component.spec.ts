import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDetailsBoxComponent } from './instructor-details-box.component';

describe('InstructorDetailsBoxComponent', () => {
  let component: InstructorDetailsBoxComponent;
  let fixture: ComponentFixture<InstructorDetailsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDetailsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDetailsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
