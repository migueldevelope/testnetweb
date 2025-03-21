import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../components/user/user.component';

@NgModule({
    imports: [
        CommonModule,
        UserComponent
    ]
})
export class UserModule { }