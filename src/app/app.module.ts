import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinocancionComponent } from './destino-cancion/destino-cancion.component';
import { ListacancionComponent } from './lista-cancion/lista-cancion.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinocancionComponent,
    ListacancionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
