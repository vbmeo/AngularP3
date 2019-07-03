import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';//per ngmodule aggiungere questi
import { HttpModule } from '@angular/http';
import { GestoneUtentiComponent } from './gestone-utenti/gestone-utenti.component';
import { AttributiComponent } from './attributi/attributi.component';
import { GestioneLibriComponent } from './gestione-libri/gestione-libri.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreServiceComponent } from './book-store-service/book-store-service.component';
import { ServerUtentiComponent } from './server-utenti/server-utenti.component';
import { OsservabileComponent } from './osservabile/osservabile.component';

@NgModule({
  declarations: [
    AppComponent,
    GestoneUtentiComponent,
    AttributiComponent,
    GestioneLibriComponent,
    BookDetailsComponent,
    BookStoreServiceComponent,
    ServerUtentiComponent,
    OsservabileComponent//app di avvio
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule
  ],
  providers: [//provider è visibile a tutti i figli non c'è bisogno di ridichiararlo nei figli
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
