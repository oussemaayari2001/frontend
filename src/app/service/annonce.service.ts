import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';
const  URL="http://localhost:3000/annonce/";
@Injectable({
  providedIn: 'root'
})

export class AnnonceService {
 
  constructor(private http:HttpClient  ) { }

  addAnnonce(a:Annonce):Observable<Annonce>{
    return this.http.post<Annonce>(URL,a);
    }
}
