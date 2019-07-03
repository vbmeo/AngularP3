import { Component, OnInit } from '@angular/core';
import  {BOOKS} from "../Model/libri";
//non so se va da questo componente, perchè nell'esempio è stato importato nella app component principale
//dove si può anche elencare questo servizio nei provider, qui.... no
//e invece forse va bene aggiungerlo appena sotto in component
import {BookStoreService} from '../services/book-store.service'//servizio
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
  selector: 'app-book-store-service',
  templateUrl: './book-store-service.component.html',
  styleUrls: ['./book-store-service.component.css'],
  providers: [BookStoreService]//provider è visibile a tutti i figli non c'è bisogno di ridichiararlo nei figli
})
export class BookStoreServiceComponent implements OnInit {
booksList: Book[];//non è istanziata perchè è il servizio che la riempie
selectedBook: Book;//non è istanziata perchè è il servizio che la riempie

//il servizio va messonel costruttore
  constructor(private bookStoreService: BookStoreService) { }

  ngOnInit() {
    this.getBooksList();
 }

 getBooksList() {
   this.booksList = this.bookStoreService.getBooks();//chiama servizio
 }

 getBookDetails(isbn: number) {
   this.selectedBook = this.bookStoreService.getBook(isbn);//chiama servizio
 }

 deleteBook(isbn: number) {
   this.selectedBook = null;
   this.booksList = this.bookStoreService.deleteBook(isbn);//chiama servizio
  }


}
