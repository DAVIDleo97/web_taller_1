import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { Error404Component } from './screens/error404/error404.component';

const routes: Routes = [
  {path: "inicio", component: HomeComponent},
  {path: "productos", component: ProductosComponent},
  {path: "contactos", component: ContactosComponent},
  {path: '', redirectTo: "inicio", pathMatch: "full"},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
