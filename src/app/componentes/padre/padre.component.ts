import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  dataPadre = "Mensaje escrito en el comp. PADRE"

  //creamos un array
  arregloColores = ['Verde', 'Amarillo', 'Rojo']

  //creamos un metodo para agregar datos al array
  agregarAlArreglo(nuevosValores:string) {
    this.arregloColores.push(nuevosValores)
  }
}
