import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';



@NgModule({
    exports: [
        NzIconModule,
        NzInputModule,
        NzSelectModule,
        NzRadioModule
    ]    
})
export class NgZorroAntdModule {

}