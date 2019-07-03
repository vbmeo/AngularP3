import { Component, OnInit } from '@angular/core';
import {Utenti} from '../Model/Utenti.model';


@Component({
  selector: 'app-gestone-utenti',
  templateUrl: './gestone-utenti.component.html',
  styleUrls: ['./gestone-utenti.component.css']
})
export class GestoneUtentiComponent implements OnInit {
  //listaUtenti : Utenti[];
  utenteNuovo: Utenti;
  listaUtenti = new Array<Utenti>();

  constructor() { }

  ngOnInit() {
    this.listaUtenti.push(new Utenti('mauro','Bologna'));
    this.listaUtenti.push(new Utenti('Paolino','Bentivoglio'));
    this.listaUtenti.push(new Utenti('Mister x','Bologna'));

  }

  addUtente(nome:string,citta:string){
    var utente:Utenti = new Utenti(nome,citta);
    this.listaUtenti.push(utente);
  }

  deleteUtente(indice:number){
    console.log('indice '+indice);
    //cicla array e togli elementao con id passato
    //non funziona bene rivedere
    for( var i = 0; i < this.listaUtenti.length; i++){
         if ( this.listaUtenti[i].id === indice) {
           this.listaUtenti.splice(i, 1);
           console.log('Cancellato '+this.listaUtenti.splice(i, 1));
         }
      }
  }
}
