import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Condidat } from '../models/condidat.model';
const  URL="http://localhost:3000/candidat";
@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient  ) { }

  addCandidat(c:Condidat):Observable<Condidat>{
    return this.http.post<Condidat>(URL,c);
    }
  getCandidats(id:any):Observable<any[]>{
    return this.http.get<any[]>(URL+'/'+id);
      }

      getCandidat(id:any):Observable<any>{
        return this.http.get<any>(URL+'/'+id);
          }

  deleteCandidat(id:any){
    return this.http.delete(URL+"/"+id);
      }
    
}
