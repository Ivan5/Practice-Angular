import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  nombre = 'Ivan';
  visible:boolean = false;

  cars:any[] = [
    'Toyota',
    'Nissan',
    'Ford'
  ];

  autos:any[] = [
    {
      id:1,
      nombre:'ford',
      total:0,
      colores:[
        'azul','verde','gris'
      ]
    },
    {
      id:2,
      nombre:'toyota',
      total:2,
      colores:[
        'azul','amarillo','negro'
      ]
    },
    {
      id:3,
      nombre:'nissan',
      total:1,
      colores:[
        'blanco','rojo','gris'
      ]
    }
  ]
}
