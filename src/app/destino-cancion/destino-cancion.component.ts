import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Destinocancion } from '../models/destino-cancion.model';

@Component({
  selector: 'app-destino-cancion',
  templateUrl: './destino-cancion.component.html',
  styleUrls: ['./destino-cancion.component.css']
})
export class DestinocancionComponent implements OnInit {
  @Input() destino: Destinocancion;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {};

  ngOnInit(){
  }

}
