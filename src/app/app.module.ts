import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { HomeComponent } from './screens/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './screens/error404/error404.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaProductos2Component } from './components/lista-productos2/lista-productos2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactosComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    Error404Component,
    ListaProductosComponent,
    ListaProductos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
