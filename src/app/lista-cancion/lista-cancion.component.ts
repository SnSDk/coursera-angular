import { Component, OnInit } from '@angular/core';
import { Destinocancion } from '../models/destino-cancion.model';

@Component({
  selector: 'app-lista-cancion',
  templateUrl: './lista-cancion.component.html',
  styleUrls: ['./lista-cancion.component.css']
})
export class ListacancionComponent implements OnInit {
  cancion: Destinocancion[];
  constructor() { 
    this.cancion = [];
  }

  ngOnInit(){
  }

  guardar(nombre:String, autor:String):boolean{
    this.cancion.push(new Destinocancion(nombre,autor));
    console.log(new Destinocancion(nombre,autor));
    return false;
  }
}
