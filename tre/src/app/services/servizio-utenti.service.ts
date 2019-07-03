import { Injectable,OnInit } from '@angular/core';
import {Output,EventEmitter} from '@angular/core';//per dati da qui a padre
import { Http, Response } from '@angular/http';
import { Utenti } from '../Model/Utenti.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'//necessari per implemanentare la map di http
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import { environment } from '../../environments/environment'; //il file dove sono contenute costanti come gli indirizzi server json
import { Subscription } from 'rxjs/Subscription';
import { MacroSettimanali } from '../Model/MacroSettimanali';
const API_URL = environment.apiUrlServerJson; //ricava indirizzo del server localhost3000....
const API_EVOLUTION_MACRO_GETALL = environment.urlBase + environment.urlMacro;

@Injectable()//sempre x servizio
export class ServizioUtentiService {
  listaUtenti: Observable<Utenti[]>;
  listaMacro: Observable<MacroSettimanali[]>;

  //se si vuole fare un array....
  arrayDiUtenti2: Utenti[] = [];// inizializzato : Utenti[]= new Array;
  arraynondefinito: any;
  //perchè i dati tornino al padre
  @Output() eventoEmitter = new EventEmitter<Utenti[]>();
  constructor(private http: Http) { }//dichiarare sempre http, carica un oggetto http che permette:
//  Questo corrisponde al nostro Client http che incapsula funzioni native XHR/JSONP :
// delete(url, options): esegue una richiesta DELETE
// get(url, options): esegue una richiesta GET
// head(url, options): esegue una richiesta HEAD
// options(url, options): esegue una richiesta OPTIONS
// patch(url, body, options): esegue una richiesta PATCH
// post(url, body, options): esegue una richiesta POST
// put(url, body, options): esegue una richiesta PUT

//Ciascuno di questi metodi restituisce un oggetto RxJS Observable

  OnInit(){
  }

  public getAllUtenti2(): Utenti[] {
    //in questo caso vogliamo restituire un array
    console.log("entrato in getAllUtenti2 x array arrayDiUtenti2 ");
    this.arrayDiUtenti2.push(new Utenti('nome inserito manualmente','citta inserito manualmente'));
    //in questo caso vogliamo restituire un array
    console.log("inseristo in array stampo " + this.arrayDiUtenti2);

    //si invoca la funzione get di Http per avere una response osservable
	var  laResponse: Observable<Response> = this.http.get(API_URL + '/Utenti');
	
	var  laResponse2: Observable<Response> = this.http.get(API_EVOLUTION_MACRO_GETALL);

    //questa observable si può mappare come un json, questo è già sufficiente per il return
    var parsejson: Observable<Utenti[]> = laResponse.map(response => {
      console.log("mappa il Json richiesto (questa viene fatto solo dopo aver chiamato subscribe)" );
      return response.json();
    });

 	var parsejson2: Observable<MacroSettimanali[]> = laResponse2.map(response2 => {
      console.log("mappa il Json richiesto (questa viene fatto solo dopo aver chiamato subscribe)" );
      return response2.json();
    });


	var elencoArticoli: Utenti[] = [];//così è vuoto
	var elencoMacro: MacroSettimanali[] = [];//così è vuoto


      // parte modificata

      //pare che sia il subscribe a far partire ò'osservable, prima fa come linq di c#'
      parsejson.subscribe(result => {
                          elencoArticoli = result;
      });

		parsejson2.subscribe(result2 => {
                          elencoMacro = result2;
      });


      elencoArticoli.forEach   (function(element) {
              console.log("novo foreach che viene visto per primo, prima anche di subscribe " + element.nome);
			});
			
 		elencoMacro.forEach   (function(element) {
              console.log("novo foreach che viene visto per primo, prima anche di subscribe " + element.id);
            });





  //la cosa strana è che questo blocco viene fatto dopo quello successivo che gira l'arrayDiUtenti
  // prova a stampare dentro qui la lunghezza per vedere se cmq fa la sua funziona
  //sì. morale, non lo so... prova a mettterci un return dentro per vedere se cambia la precedenza degli eventi
  //niente non serve, indaghiamo
  var nonso: Subscription = parsejson.subscribe(data => {
      var arrayDiUtenti3: Utenti[] = [];//se questo array viene messo fuori non è più leggibile....
      //forse perchè qui dentro è js e fuori è typescript....
      data.forEach(function(element) {
          console.log("inserisco in array da json  '" + element.nome) + "'";
            arrayDiUtenti3.push(element);
        });
        console.log("lunghezza array interno dopo giro observable= "+arrayDiUtenti3.length);
        this.eventoEmitter.emit(arrayDiUtenti3);
        console.log("dopo delete ");
	  });
	  

	var nonso2: Subscription = parsejson2.subscribe(data2 => {
      var arrayDiUtenti3: MacroSettimanali[] = [];//se questo array viene messo fuori non è più leggibile....
      //forse perchè qui dentro è js e fuori è typescript....
      data2.forEach(function(element) {
          console.log("inserisco in array da json  '" + element.id) + "'";
            arrayDiUtenti3.push(element);
        });
        console.log("macro lunghezza array interno dopo giro observable= "+arrayDiUtenti3.length);
	  });



    return this.arrayDiUtenti2;
  }



  

 geteventoEmitter (): EventEmitter<Utenti[]>{
   return this.eventoEmitter;
 }


  //AGGIUNGIAMO TUTTI I SERVIZI POSSIBILI...
  // API: GET /todos
  //rotorna un oggetto Observable che però gli si dice che è un array di un oggetto utenti
  //
  public getAllUtenti(): Observable<Utenti[]> {
    console.log("entrato in getAllUtenti");
    //si invoca la funzione get di Http per avere una response osservable
    var  laResponse: Observable<Response> = this.http.get(API_URL + '/Utenti');
    //questa observable si può mappare come un json, questo è già sufficiente per il return
    var parsejson: Observable<Utenti[]> = laResponse.map(response => {
      return response.json();
    });

    //se si vuole fare un array....
  var arrayDiUtenti: Utenti[]= new Array;// : Utenti[]= new Array;

  //la cosa strana è che questo blocco viene fatto dopo quello successivo che gira l'arrayDiUtenti
  // prova a stampare dentro qui la lunghezza per vedere se cmq fa la sua funziona
  //sì. morale, non lo so... prova a mettterci un return dentro per vedere se cambia la precedenza degli eventi
  //niente non serve, indaghiamo
  parsejson.subscribe(data => {
      data.forEach(function(element) {
            arrayDiUtenti.push(element);
            console.log("giro un osservable utente "+element.nome);
        });
        console.log("lunghezza array arrayDiUtentiInterno dopo giro observable= "+arrayDiUtenti.length);
      });


      //giro array di Utenti
      console.log("lunghezza array= "+arrayDiUtenti.length);
      arrayDiUtenti.forEach(function(element) {
            console.log("giro array utenti "+element.nome);
        });


    return parsejson;

//originale:
  //   return this.http
  //   .get(API_URL + '/Utenti')// restituisce un Observable<Response>
  //  .map(response => {// il risultato ottenuto response
  //   const utenti = response.json();//si mette in una variabile e va trattato come json
  //   return utenti.map(utente => new Utenti(utente.nome,utente.citta));//il json è mappato
  //   });
  }







   // API: POST /todos
   public createUtenti(utente: Utenti) {
   // userà this.http.post()
   return null;
   }
   // API: GET /todos/:id
   public getUtentiById(todoId: number) {
   // userà this.http.get()
   }
   // API: PUT /todos/:id
   public updateUtenti(utente: Utenti) {
   // userà this.http.put()
   }
   // DELETE /todos/:id
   public deleteUtentiById(todoId: number) {
   // userà this.http.delete()
   }




}
