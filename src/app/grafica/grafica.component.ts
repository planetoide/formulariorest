import { ProductosService } from './../productos.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  chart = [];
  cat;
  alimentos;
  bebidas;
  limpieza;
  otros;
  constructor(private servicio: ProductosService) {
    this.verGrafica();
   }

  ngOnInit() {
  }
  verGrafica() {
    this.alimentos = 0;
    this.bebidas = 0;
    this.limpieza = 0;
    this.otros = 0;
    this.servicio.getAllProducts().subscribe(res => {
      this.cat = res;
      this.cat.forEach(element => {
        if (element.categoria === 'alimentos') {
          this.alimentos = this.alimentos + 1;
        }
        if (element.categoria === 'bebidas') {
          this.bebidas = this.bebidas + 1;
        }
        if (element.categoria === 'limpieza') {
          this.limpieza = this.limpieza + 1;
        }
        if (element.categoria === 'otra') {
          this.otros = this.otros + 1;
        }
      });

      /*inicia el chart*/
    this.chart = new Chart('canvas', {
      type: 'pie',
      data: {
        datasets: [{
          data: [
            this.alimentos,
            this.bebidas,
            this.limpieza,
            this.otros
          ],
          backgroundColor: [
            'rgba(34, 206, 206, 1)',
            'rgba(5, 155, 255, 1)',
            'rgba(255, 61, 103, 1)',
            'orange'
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Alimentos',
          'Bebidas',
          'Limpieza',
          'otros'
        ]
      },
      options: {
        responsive: true
      }
    });
    /* termina el chart */
    });
  }

}
