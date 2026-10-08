import { Component, inject } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  imports: [],
  selector: 'app-alumnos',
  styleUrl: './alumnos.css',
  templateUrl: './alumnos.html',
})
export class Alumnos {
  alumnosService = inject (AlumnosService);

  constructor () {
    console.log('Lista de alumnos: ', this.alumnosService.getListaAlumnos());
  }
}
