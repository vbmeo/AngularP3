import { Injectable,OnInit } from '@angular/core';
import {Output,EventEmitter} from '@angular/core';//per dati da qui a padre
import { Http, Response } from '@angular/http';
import { MacroSettimanali } from '../Model/MacroSettimanali';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'//necessari per implemanentare la map di http
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment'; //il file dove sono contenute costanti come gli indirizzi server json
import { Subscription } from 'rxjs/Subscription';
const API_EVOLUTION_MACRO_GETALL = environment.urlBase + environment.urlMacro; //ricava indirizzo del server localhost3000....


@Injectable()
export class ProvaserviziomacroService {

  constructor() { }

}
