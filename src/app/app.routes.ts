import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { PageComponent } from './component/pages/page/page.component';

const routerPaths:Route[] = [
    { path  : '', component: PageComponent },
    { path  : '**', component: PageNotFoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routerPaths)],
    exports: [RouterModule]
})
export class AppRoutingModule{}