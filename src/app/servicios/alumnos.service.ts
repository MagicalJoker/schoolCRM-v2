import { Injectable } from '@angular/core';//Ahí ponia Service

@Injectable(
    {
        providedIn: 'root'
    }
) //Aquí, de base, ponía Service, pero lo cambié a Injectable para que sea un servicio de Angular
export class AlumnosService {
    //Propiedades del servicio
    private listaAlumnos: any[] = [
        {
            nombre: 'Juan',
            apellido: 'Pérez',
            edad: 20,
            curso: 'Matemáticas'
        },
        {
            nombre: 'María',
            apellido: 'Gómez',
            edad: 22,
            curso: 'Física'
        },
        {
            nombre: 'Pedro',
            apellido: 'López',
            edad: 19,
            curso: 'Química'
        }
    ];






    //Métodos del servicio
    getListaAlumnos() {
        return this.listaAlumnos;
    }

    addAlumno(alumno: any) {
        this.listaAlumnos.push(alumno);
    }
    
    removeAlumno(index: number) {
        this.listaAlumnos.splice(index, 1);
    }
}
