import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menus/menu.component/menu.component';

@Component({
  imports: [RouterOutlet, MenuComponent],
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
}
