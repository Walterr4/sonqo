import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/config.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  menuList:IMenu[];
  titleHeader:string;

   constructor() { }

   ngOnInit() {
    let obj = this;
    obj.titleHeader = "Buenas Rutas Perú";
    obj.loadMenu();
  }

  loadMenu():void{
     let obj = this;
     obj.menuList = [
        { idMenu:1,active:"active",nameOption:"Home",urlLink:"/menu",iconOption:"fa fa-home"},
        { idMenu:2,active:"",nameOption:"Somos",urlLink:"/menu/somos",iconOption:""},
        { idMenu:3,active:"",nameOption:"Servicios",urlLink:"/menu/servicios"},
        { idMenu:4,active:"",nameOption:"Metodo",urlLink:"/menu/metodo"},
        { idMenu:5,active:"",nameOption:"Clientes",urlLink:"/menu/clientes"},
        { idMenu:6,active:"",nameOption:"Contacto",urlLink:"/menu/contactos"},
        
     ];
  }
  logout():void{
    
  }
}
