import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menus/menu.component/menu.component';
import { Alumnos } from './alumnos/alumnos';

@Component({
  imports: [RouterOutlet, MenuComponent, Alumnos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('CRM School-v2');

   //En JavaScript no hay tipado de datos por lo que esto es válido
   nombre = 'Juan';

   muestraNombre() {
    const nombre = 33;
    console.log(nombre); // Muestra 33
    console.log(this.nombre); // Muestra 'Juan'
   }


   //Pedir al servicio de alumnos la lista de alumnos y mostrarla en consola
  contador = signal(0);
  constructor() {
    this.contador.set(5);
    console.log('Signal counter value: ', this.contador());
    this.contador.update((value) => value + 1);
    console.log('Signal counter value after update: ', this.contador());
  }
}
