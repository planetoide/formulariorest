import { ProductosService } from './productos.service';
// import { ConsumoService } from './consumo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductformComponent } from './productform/productform.component';
import { GraficaComponent } from './grafica/grafica.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductformComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
