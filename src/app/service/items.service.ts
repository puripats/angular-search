import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../hero';



@Injectable({
  providedIn: 'root'
})


export class ItemsService {


  private readonly URL = 'https://api.publicapis.org/categories';


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

    getResults(): Observable<Hero[]> {


    return this.http.get<Hero[]>(this.URL);




}
}

