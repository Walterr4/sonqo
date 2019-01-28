import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        PageNotFoundComponent,
    ],
    exports: [
        HeaderComponent,
        PageNotFoundComponent
    ]
})
export class SharedModule { }