import { Component, OnInit } from '@angular/core';
import  {BOOKS} from "../Model/libri";
import { BookDetailsComponent } from '../book-details/book-details.component';
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
  selector: 'app-gestione-libri',
  templateUrl: './gestione-libri.component.html',
  styleUrls: ['./gestione-libri.component.css']
})
export class GestioneLibriComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  booksList: Book[] = BOOKS;//istanzia subito i libri in memoria
   selectedBook: Book;//questa variabile cambia a seconda di quale libro viene selezionato, ed essendo
   //bidirezionale cambia la parte grafica del dettaglio del libro
   title = 'Elenco Libri';


   getBookDetails (isbn: number) {
     //viene passato l'isdn del libro in questione che serve come filtro dell'array
     var selectedBook = this.booksList.filter(book => book.isbn === isbn);
     this.selectedBook = selectedBook[0];
   }

//recupera il dato proveniente dal figlio
   deleteBook(isbn : number){
     console.log("isbn="+isbn);
   }

}
