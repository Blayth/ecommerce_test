import { Component } from '@angular/core';
import { Articolo } from './articolo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  articoli:Articolo[] = [
    {'id_articolo': 1,'titolo':'A spasso per il Tevere','testo':'Testo1', 'autore':'Mr. OK'},
    {'id_articolo': 2,'titolo':'Si, la vita è tutta un framework','testo':'Testo2','autore':'Antonio Giannasca'},
    {'id_articolo': 3,'titolo':'React & Angular: due facce della stessa medaglia','testo':'Testo3','autore':'Marco Calisesi'},
  ]

  myArticolo;
  onSelect(item: Articolo): void {
    this.myArticolo = item;
    console.log(item)
    }
}
