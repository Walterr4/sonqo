import { NgModule } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { PAGES_ROUTE } from './pages.route';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { PageComponent } from './pages/page/page.component';


@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        SomosComponent,
        ServiciosComponent,
        MetodosComponent,
        ClientesComponent,
        ContactosComponent,
        PageComponent,
               
    ],
    exports: [
        
    ],
    imports: [
        SharedModule,
        PAGES_ROUTE,
        FormsModule,
        CommonModule,
        NgbModule

    ]
})
export class PagesModule {}