import { Component } from '@angular/core';
import { Model, TodoItem } from "./Model/model";


//ovvero al component di import { Component } from '@angular/core'; assegna i seguenti parametri selector ecc..
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //vine creato un oggetto che ha un nome solo e diversi lavori da fare
  model = new Model();
  templateDaCaricare="todo";
  messaggio = "un messaggio...";
  messaggio2 = "un messaggio2...";


  getName() {
    return this.model.user;
  }
  getTodoItems() {
    //filtra tutti i lavori dell'oggetto che hanno la proprietà done false
    return this.model.items.filter(item => !item.done);
  }
  addItem(newItem) {//arriva una stringa che è il nome del lavoro da aggiungere all'oggetto
    if (newItem != "") {
      //per defaout vien messo come non fatto
      this.model.items.push(new TodoItem(newItem, false));
    }
  }

  caricaTemplate(indice: string){
    switch(indice) {
       case 'Utenti': {
          this.templateDaCaricare=indice;
          break;
       };
       case 'Attributi': {
          this.templateDaCaricare=indice;
          break;
       }
       case 'Libri': {
          this.templateDaCaricare=indice;
          break;
       }case 'Servizio': {
          this.templateDaCaricare=indice;
          break;
       }case 'UtentiConServizioServer': {
          this.templateDaCaricare=indice;
          break;
       }case 'StudioObservable': {
          this.templateDaCaricare=indice;
          break;
       }
       default: {
          this.templateDaCaricare="todo";
          break;
       }


     }
  }



  Cercaconquerysuarray(dafare:string){
    console.log("cerco:"+dafare);
    var selectedLavoro = this.model.items.filter(traQuelloDaFare => traQuelloDaFare.action === dafare);
    //stampa tutti gli elementi trovati che corrispondono
    selectedLavoro.forEach(function(element) {
      console.log(element);
    });
  }


  showMessage(msg) {
    this.messaggio = msg;
    alert(msg);
  }




}
