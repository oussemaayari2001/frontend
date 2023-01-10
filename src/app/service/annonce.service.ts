import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';
import { TokenStorageService } from './token-storage-service.service';
const  URLRh="http://localhost:3000/rh/annonces/";
const  URL="http://localhost:3000/annonce";
@Injectable({
  providedIn: 'root'
})

export class AnnonceService {
 
  constructor(private http:HttpClient,private token:TokenStorageService  ) { }

  addAnnonce(a:Annonce):Observable<Annonce>{
  
    return this.http.post<Annonce>(URL,a);
    }

    getIdAnnoncesByIdRh(idRh:any){
      return this.http.get<any>(URLRh+"/"+ idRh);
      }

      getAnnonce(id:any){
        return this.http.get<any>(URL+"/"+ id)
        }


     
      
}
