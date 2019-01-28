import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MetodosComponent } from './pages/metodos/metodos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContactosComponent } from './pages/contactos/contactos.component';


const pagesRoutes: Routes = [
    {   path: 'menu',
        component: MenuComponent,
        children: [
            { path  : 'home',  component: HomeComponent},
            { path  : 'somos',  component: SomosComponent },
            { path  : 'servicios',component:ServiciosComponent},
            { path  : 'meodos', component:MetodosComponent},
            { path  : 'clientes', component:ClientesComponent},
            { path  : 'contactos', component:ContactosComponent}
        ]
    }
];
export const PAGES_ROUTE = RouterModule.forChild( pagesRoutes );