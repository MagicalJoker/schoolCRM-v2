import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card-alumno',
  styleUrl: './card-alumno.css',
  templateUrl: './card-alumno.html',
})
export class CardAlumno {
  alumno = input<any>();
}
