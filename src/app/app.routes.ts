import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { PageComponent } from './component/pages/page/page.component';
import { SomosComponent } from './component/pages/somos/somos.component';
import { HomeComponent } from './component/pages/home/home.component';

const routerPaths:Route[] = [
    { path  : '', component: HomeComponent },
    { path  : '**', component: PageNotFoundComponent }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routerPaths)],
    exports: [RouterModule]
})
export class AppRoutingModule{}