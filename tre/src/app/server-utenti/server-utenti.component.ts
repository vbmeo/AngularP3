import { Component, OnInit } from '@angular/core';
import {ServizioUtentiService } from '../services/servizio-utenti.service';
import { Utenti } from '../Model/Utenti.model';
import { Observable } from 'rxjs/Observable';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-server-utenti',
  templateUrl: './server-utenti.component.html',
  styleUrls: ['./server-utenti.component.css'],
  providers : [ServizioUtentiService]
})
export class ServerUtentiComponent implements OnInit {
  listaUtenti : Observable<Utenti[]>;
  utente :Utenti;
  listaUtentiArray : Utenti[]=[];//array inbizializzato

  constructor( private servizioUtentiService :ServizioUtentiService) { }//private servizioUtentiService :ServizioUtentiService

  ngOnInit() {

    this.listaUtentiArray = this.servizioUtentiService.getAllUtenti2();

    var eventoEmitt: EventEmitter<Utenti[]> = this.servizioUtentiService.geteventoEmitter();
    eventoEmitt.subscribe(data => {
      data.forEach(function(element) {
        console.log("evento...  '" + element) + "'";
      });
    });
    
    console.log(eventoEmitt);
    //eventoEmitt.forEach
  //  this.listaUtentiArray.forEach(function(element) {
  //        console.log("giro array utenti passati in component "+element.nome);
  //    });

      console.log("lunghezza array arrayDiUtenti2 passato a component= "+this.listaUtentiArray.length);

  }

}
