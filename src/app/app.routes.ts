import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { MenuComponent } from './component/pages/menu/menu.component';
import { HomeComponent } from './component/pages/home/home.component';

const routerPaths:Route[] = [
    { path: '', component: MenuComponent },
    { path: 'menu', component: MenuComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routerPaths)],
    exports: [RouterModule]
})
export class AppRoutingModule{}