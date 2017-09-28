import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MovieService {
    hey: any = "Hello World";
    apikey: string = "ba889e7d273d321de65b5bd71a96a73e";
    url: string = "https://api.themoviedb.org/3/movie/550?api_key=ba889e7d273d321de65b5bd71a96a73e"
    
}