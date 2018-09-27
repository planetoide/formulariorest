import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  /*
    Método para acceder a la api rest para agregar un nuevo elemento
  */
  addProduct(datos) {
    const url = 'https://productostienda.herokuapp.com/services/rest/addproduct';
    this.http.post(url, datos)
        .subscribe(
            data => {
                console.log('POST Request is successful ', data);
            },
            error => {
                console.log('Error', error);
            }
        );
  }

  /*
    Método para acceder a la api y recuperar todos los registros en la base de datos
  */
  getAllProducts() {
    const url = 'https://productostienda.herokuapp.com/services/rest/showproducts';
   return this.http.get(url);
  }

  /*
    *Método para eliminar un registro de la base de datos
  */
  deleteProduct(datos) {
      const url = 'https://productostienda.herokuapp.com/services/rest/delproduct';
      this.http.post(url, datos).subscribe(
        data => {
            console.log('POST Request is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
  }
}
