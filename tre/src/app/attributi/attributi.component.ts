import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';//per lavorare in nativo sull'elemento DOM
//@ViewChild('html') elemento:ElementRef;

@Component({
  selector: 'app-attributi',
  templateUrl: './attributi.component.html',
  styleUrls: ['./attributi.component.css']
})
export class AttributiComponent implements OnInit{
  // Reference firstNameInput variable inside Component
  @ViewChild('scrittaCheCambia') nameInputRef: ElementRef;

  isImportant=true;
  scritta = 'Some text that may be important.';
  titoloBottone = "Rimpicciolisce";
  sfondoDue = 'blue';

  constructor() { }

  ngOnInit() {

  }

  show(lastName: HTMLInputElement){
    console.log(" da codice è già stato passato l'elento frase scritta che cambia con il valore:"+
    this.nameInputRef.nativeElement.innerHTML +
    "<br> passata scritta bottone:" + lastName.innerHTML);
    lastName.innerHTML='cambio scritta al bottone';
    }

  cambiaScritta(){
      console.log(this.nameInputRef.nativeElement.value);
    if (this.isImportant){
      this.isImportant=false;
      this.titoloBottone='Ingrandisci';
    }else{
      this.isImportant=true;
      this.titoloBottone='Rimpicciolisci';
    }
  }

  cambiaSfondo(){
    this.sfondoDue = 'red';
  }
  setMyStyles() {
    //nb. come vedi non vengono usate "" ma solo parentesi graffe
    let styles = {
    'background-color': this.isImportant ? 'red' : 'transparent',
    'font-weight': this.isImportant ? 'bold' : 'normal'
  };
  return styles;
  }



  setMyStyles2() {
    //nb. come vedi non vengono usate "" ma solo parentesi graffe
    var styles = {'background-color': 'lime','font-size': '20px','font-weight': 'bold'};
      return styles;
    }

}
