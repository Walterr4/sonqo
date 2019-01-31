import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PagesModule } from './component/page.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './component/pages/menu/menu.component';
import { HttpClientModule}    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
