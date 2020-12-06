import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../Model/response-model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  // https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68

  getPizzaList(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
  }

}
