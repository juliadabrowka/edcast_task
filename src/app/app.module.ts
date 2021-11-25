import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { SeparatorComponent } from './components/layout/separator/separator.component';
import { RatingBarComponent } from './components/rating-bar/rating-bar.component';
import { InstructorGridComponent } from './components/instructor/instructor-listing/instructor-grid/instructor-grid.component';
import { InstructorDetailsBoxComponent } from './components/instructor/instructor-listing/instructor-details-box/instructor-details-box.component';
import { ButtonComponent } from './components/button/button.component';
import { RequestQuoteComponent } from './components/request-quote/request-quote.component';
import { HttpClientModule } from '@angular/common/http';
import { ValueState } from './states/value/value.state';
import { InstructorInfoComponent } from './components/instructor/instructor-listing/instructor-info/instructor-info.component';
import { InstructorAboutComponent } from './components/instructor/instructor-listing/instructor-about/instructor-about.component';
import { ProgramNameComponent } from './components/program-name/program-name.component';
import { FilterTagComponent } from './components/filter-tag/filter-tag.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CommentsComponent } from './components/comments/comments.component';
import { InstructorDataboxComponent } from './components/instructor/instructor-listing/instructor-databox/instructor-databox.component';
import { PaginationComponent } from './components/pagination/pagination.component';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SeparatorComponent,
    RatingBarComponent,
    InstructorGridComponent,
    InstructorDetailsBoxComponent,
    ButtonComponent,
    RequestQuoteComponent,
    InstructorInfoComponent,
    InstructorAboutComponent,
    ProgramNameComponent,
    FilterTagComponent,
    CalendarComponent,
    CommentsComponent,
    InstructorDataboxComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([ValueState],{
      developmentMode: !environment.production
    }),
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
