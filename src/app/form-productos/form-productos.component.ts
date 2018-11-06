import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {

  producto: Producto;

  constructor() {
    this.producto = new Producto();
    this.producto.nombre = '';
    this.producto.esNacional = true;
    this.producto.pais = 'mx';
  }

  ngOnInit() {
  }

  enviar(formulario) {
    console.log(formulario);
  }

}
