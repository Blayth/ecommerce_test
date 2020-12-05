/*
Quando il main.ts parte (eseguendo il comando ng serve)
richiama l'appModule che gli fornisce tutto quello di cui
ha bisogno per eseguire l'applicazione.
Di fatti questa classe definisce il bootstrap
(che non ha niente a che vedere con lo stile)
e lo passa al main
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ //questo dichiarato con la @ è un decorator che serve per far capire ad Angular la funzione di quella classe
  declarations: [
    AppComponent //abbiamo importato direttamente l'app.component.ts
  ],
  imports: [//imports definisce le classi che devono essere importate per il funzionamento del component template
    BrowserModule, //si usa per eseguire l'app su un Browser
    AppRoutingModule // si usa per gestire il routing ossia stabilire dove inviare un dato elemento di una cominicazione
  ],
  providers: [],
  bootstrap: [AppComponent]//in questo caso gli stiamo dicendo che questa è la classe root, da cui deve partire la lettura dell'applicazione
})
export class AppModule { }
