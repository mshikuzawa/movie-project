import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {
        hey: any = "Hello World";
        url: string= "http://mari-fall-2017-phortonssf.c9users.io:8080/api/AppUsers";

    constructor(public http: Http) {    }
    
    
    //for url use request url for create new instance
    register(user){
        return this.http.post(this.url, user)
        .map (res => res.json())
    }

}
