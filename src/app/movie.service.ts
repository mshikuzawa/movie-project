import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MovieService {
    hey: any = "Hello World";
    apikey: string = "ba889e7d273d321de65b5bd71a96a73e";
    url: string = "https://api.themoviedb.org/3/search/movie?api_key=ba889e7d273d321de65b5bd71a96a73e&query=";
    testUrl: string = "http://mari-fall-2017-phortonssf.c9users.io:8080/api/movie";

  constructor(public http: Http) { 
  }
    
     getData(endpoint) {
        return this.http.get(this.url + endpoint)
            .map(res => res.json())
  }
  
//   postData(postInfo){
//      return this.http.post(this.testUrl, postInfo)  
//     .map(data => data.json())
//  }

}



