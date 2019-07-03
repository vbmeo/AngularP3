import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';//per dati da parde a qua
import {Output,EventEmitter} from '@angular/core';//per dati da qui a padre
class Book
{
 public isbn: number;
 title:string;
 authors: string;
 published: string;
 description: string;
 coverImage: string;

}
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  //per poterli esporre tra componenti è necessario utilizzare la direttiva @Input()

  @Input() book: Book;//questo viene passato a questo componente tramite html : <app-book-details [book]="selectedBook"> </app-book-details>

//oppure si può dare un nome diverso alla proprietà del componente B potremmo utilizzare un alias
//  @Input("myBook") book: Libro
//dopo però nell'html padre occorre riferirsi a myBook es.:
//<app-book-details [myBook]="selectedBook"> </app-book-details>


//perchè i dati tornino al padre
  @Output() onDelete = new EventEmitter<number>();


//per il passaggio dati inverso Output
//funzione:mette un emissione di un dato nell'output onDelete e passa un numero che è l'isbn
//in questo caso non viene passato da questo html al codice l'isbn perchè il libro è sempre quello passato dal parde
//non cambia insomma
  deleteBook () {
    this.onDelete.emit(this.book.isbn);
  }
  //a questo punto, perchè il padre intercetti l'evento otuput, sempre nel padre html si aggiunge:
  //(onDelete)="deleteBook($event)"
 //<book-details [myBook]="selectedBook" (onDelete)="deleteBook($event)"> </book-details>




  constructor() { }

  ngOnInit() {
  }

}
