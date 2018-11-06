export class Producto {
  id: number;
  nombre: string;
  precio: number;
  esNacional: boolean;
  pais: string;

  constructor() {
    this.nombre = '';
    this.esNacional = true;
    this.pais = 'mx';
  }
}
