import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {
  catalogo: Producto[];
  ultimoId: number;
  producto: Producto;

  constructor() {
    this.catalogo = [];
    this.ultimoId = 0;
    this.producto = new Producto();
  }

  ngOnInit() {}

  enviar(formulario) {
    console.log(formulario);
    this.producto.id = ++this.ultimoId;
    this.catalogo.push(this.producto);
    this.producto = new Producto();
    console.log(this.catalogo);
  }

  eliminar(id: number) {
    this.catalogo = this.catalogo.filter(function(p) {
      return p.id !== id;
    });
  }

  editar(id: number) {
    Object.assign(
      this.producto,
      this.catalogo
        .filter(function(p) {
          return p.id === id;
        })
        .pop()
    );
  }

  actualizar() {
    const id = this.producto.id;
    Object.assign(
      this.catalogo
        .filter(function(p) {
          return p.id === id;
        })
        .pop(),
      this.producto
    );
    this.producto = new Producto();
  }

  cancelar() {
    this.producto = new Producto();
  }
}
