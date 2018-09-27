import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  productos: Object  = [];
  lproductos: any;
  longitud;
  p = new Producto();
  categorias = ['alimentos', 'bebidas', 'limpieza', 'otra'];
  constructor(private datosForm: ProductosService) {
    this.obtenerProductos();
  }

  ngOnInit() {
  }

  /*
    Método para agregar productos a la base de datos
  */
  addProducto(dato) {
    console.log(this.p.nombre);
    console.log('Se han recibido los datos' + typeof(dato));
    this.datosForm.addProduct(dato);
  }

  /*
    Método para mostrar todos los productos registrados en la base de datos
  */
  obtenerProductos() {
    this.datosForm.getAllProducts().subscribe(
      data => {
          console.log('get Request is successful ', data);
          this.productos = data;
          this.lproductos = this.productos;
          this.longitud = this.lproductos.length;
          console.log('la longitud del array' + this.longitud);
      },
      error => {
          console.log('Error', error);
      }
    );
  }

  eliminarProducto(producto) {
    this.obtenerProductos();
    console.log('el producto es ' + producto.nombre);
    this.datosForm.deleteProduct(producto);
    this.obtenerProductos();
  }
}
