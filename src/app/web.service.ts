import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExchangeRate } from "./models/exchange-rate";

@Injectable({ providedIn: 'root' })
export class WebService {
    constructor( private http: HttpClient){}

    loadTabe(count: string) : Observable<ExchangeRate[]>{
       return this.http.get<ExchangeRate[]>('https://jsonplaceholder.typicode.com/todos?_limit=' + count);
    }

    getItemById(id: number) : Observable<ExchangeRate>{
       return this.http.get<ExchangeRate>('https://jsonplaceholder.typicode.com/todos/' + id);
    }
}