// How to save data to a user name 

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
@Injectable()

export class FavoritesService {

  constructor( public http:Http ) { }
  /*Our base url replace with your backends url or else you will be posting data to my backend
  */
  baseUrl: string = "http://mari-fall-2017-phortonssf.c9users.io:8080/api";
  //Our endpoin, I kept it split off from the base url in case I wanted to do something else on our server
  endpoint: string = "/movies" 

   /*Function definition so we can our save data. Our function has one parameter dataToSend so when
   invoked our function needs an argument, and the object we pass into our function will need to be in the 
   format as we defined in our loopback model.
   */
   saveFavorites(dataToSend){
     console.log(dataToSend)
     return this.http.post( this.baseUrl + this.endpoint, dataToSend)
      .map(res => res.json())
   }
}