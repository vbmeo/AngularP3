import { Injectable } from '@angular/core';//caricato in automatico in quanto servizio
import  {BOOKS} from "../Model/libri";
class Book
{
 public isbn: number;
 title:string;
 authors: string;
 published: string;
 description: string;
 coverImage: string;

}
@Injectable()
export class BookStoreService {
  booksList: Book[] = BOOKS;

  constructor() { }

  //torna array dei libri completi
  getBooks () {
    return this.booksList;
  }

  //tona libro intero selezionato
  getBook (isbn: number) :Book {
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);
    return selectedBook[0];
  }

//ritorna lista aggiornata libri senza quello elimnato,ma
//in realtà non lo elimina, fa solo un filtro
  deleteBook (isbn: number):Book[] {
  this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }


}
