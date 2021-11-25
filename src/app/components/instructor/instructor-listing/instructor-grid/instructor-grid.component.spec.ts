import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorGridComponent } from './instructor-grid.component';

describe('InstructorContainerComponent', () => {
  let component: InstructorGridComponent;
  let fixture: ComponentFixture<InstructorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
