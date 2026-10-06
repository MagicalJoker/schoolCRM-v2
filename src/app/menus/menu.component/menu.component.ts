import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu',
  styleUrl: './menu.component.css',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  userRol = 'user';
  itemsMenu = [
    'Home',
    'About',
    'Courses',
    'Asistencia',
    'Services',
    'Configuration',
    'Contact',
  ]; 
}
