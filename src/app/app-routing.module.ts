import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorAboutComponent } from './components/instructor/instructor-listing/instructor-about/instructor-about.component';
import { InstructorGridComponent } from './components/instructor/instructor-listing/instructor-grid/instructor-grid.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorGridComponent
  },
  {
    path: 'instructor-about/:name',
    component: InstructorAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
