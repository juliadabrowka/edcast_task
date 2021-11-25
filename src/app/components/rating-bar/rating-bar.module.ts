import { NgModule } from "@angular/core";
import { NgZorroAntdModule } from "src/app/ng-zorro-antd.module";
import { RatingBarComponent } from './rating-bar.component'
@NgModule({
    declarations: [
        RatingBarComponent
    ],
    imports: [
        NgZorroAntdModule
    ],
    providers: []
})

export class AppModule { }