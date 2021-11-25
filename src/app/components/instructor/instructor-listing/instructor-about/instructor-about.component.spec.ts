import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAboutComponent } from './instructor-about.component';

describe('InstructorAboutComponent', () => {
  let component: InstructorAboutComponent;
  let fixture: ComponentFixture<InstructorAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
