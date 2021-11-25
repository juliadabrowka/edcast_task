import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';


@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        NgZorroAntdModule
    ],
    providers: []
  })
  
  export class AppModule { }
  