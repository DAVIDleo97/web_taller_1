import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-productos2',
  templateUrl: './lista-productos2.component.html',
  styleUrls: ['./lista-productos2.component.css']
})
export class ListaProductos2Component {

  productos = [
    {
      nombre: "Cerveza",
      precio: "2$",
      tipo: "Bebida",
      imagen:"https://w7.pngwing.com/pngs/52/625/png-transparent-duff-beer-hd-logo.png"
    },
    {
      nombre: "CocaCola",
      precio: "1$",
      tipo: "Refresco",
      imagen:"https://lataberna.com.ec/quito/brasil/6365-large_default/coca-cola-2500ml.jpg"
    },
    {
      nombre: "Agua",
      precio: "1$",
      tipo: "Agua",
      imagen:"https://img.mundopmmi.com/files/base/pmmi/mundo/image/2020/01/botella_cristal_100_100.5e31c8c214c05.png?auto=format%2Ccompress&fit=max&q=70&w=1200"
    },
    {
      nombre: "Wisky",
      precio: "10$",
      tipo: "Bebida",
      imagen:"https://laguarda.com.ec/wp-content/uploads/2017/12/WHISKY-JACK-DANIELS-1.jpg"
    },
    {
      nombre: "Ron",
      precio: "5$",
      tipo: "Bebida",
      imagen:"https://fiestacerca.vtexassets.com/arquivos/ids/155439/2071.jpg?v=637623157951430000"
    }
  ]

}
