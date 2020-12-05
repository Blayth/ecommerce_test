/*Questa classe Typescript definisce il comportamento del selettore
app root che costituisce l'interfaccia principale della nostra applicazione.
Questo componente viene importato direttamente nell'app.module.ts
*/
import { Component } from '@angular/core';

@Component({//decorator per dire ad angulare che questa classe typescript è un componente
  selector: 'app-root', //qui diamo il nome al selettore del nostro componente, il nome è facoltativo
  templateUrl: './app.component.html',/*il link al file html utilizzato per la view del componente,
  template invece che templateUrl possiamo inserire del codice html all'interno dei backtick ----> ``
  */
  styleUrls: ['./app.component.css']
})

export class AppComponent {//export riguarda lo scope della classe e fa si che i suoi metodi possano essere utilizzati al di fuori di essa
  myName: string = "Lorenzo"; //a differenza di javascript standard, con typescript è possibile tipizzare le proprietà
  mySurname: string = "Leoni"; //queste non sono le classiche variabili javascript ma sono delle proprietà che andiamo a definire
  myAge: number = 24;// mettendo let davanti a queste proprietà avremo un errore, confermandoci il fatto che non si tratta di variabili

  displayText = false
  toggle() {
    console.log(this.displayText)
    this.displayText = !this.displayText
  }

  dangerous: boolean = true;
  componentStyle = {
    'width': '200px',
    'height': '100px',
    'background-color': this.dangerous ? 'red' : 'green'
  };

  loaded = true;
  important = true;
  attention = false;
  componentClasses = {
    show: this.loaded, //true
    warning: this.important && this.attention //false
  };

  SolaLettura: boolean = true

  elencoArticoli: any[] = [
    { 'titolo': 'Titolo1', 'autore': 'Autore1' },
    { 'titolo': 'Titolo2', 'autore': 'Autore2' },
    { 'titolo': 'Titolo3', 'autore': 'Autore3' }
  ]

  mammifero: any = {
    life: "gravidanza",
    air: "respira",
    sex: "male & female",
    type: 4000,
    uman: true,
    creation: function(){
      this.creazione = "Somthing think the Umanity is a big God's Mistake"
    },
    famousSpeces: ["uman", "dog", "cats", "yourMom"]
  }


  getName(){
    return this.myName
  }

  myFavorite;
  OnClickMe(){
    return this.myFavorite = "Stronzo"
  }

  scritto: string ="" //values rappresenta il valore del testo visualizzato
  onKey(event: any){
  this.scritto += event.key; //accumula le battute e riproduce il contenuto digitato
  }
  constructor() {
  }

}

class Courses {
  constructor(
  public id: number,
  public name: string) { }
  }

//Definiamo una classe più articolata
class Prova {
  //alcune proprietà
  myName:string ="Antonio";
  myLastName:string ="Giannasca";
  myMessage:string="";
  corsi: any[] = [ //è un array di oggetti, che vengono direttamente istanziati e valorizzati (vedi nozione di costruttore)
  new Courses(0, 'Yii2'),//sto istanziando un nuovo oggetto di classeCourses
  new Courses(1, 'Node'),
  new Courses(2, 'Angular'),
  new Courses(3, 'Ajax')
  ];
  //metodo addCorso
  addCorso(newCorso: string) {
  if (newCorso) {
  this.corsi.push(new Courses(this.corsi.length + 1,
  newCorso));
  console.log(this.corsi)
  this.myMessage="";
  }else{
  this.myMessage="Dati mancanti";
  }
  }
  }//fine class




