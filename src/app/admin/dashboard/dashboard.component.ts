import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Condidat } from 'src/app/models/condidat.model';

import { CandidatService } from 'src/app/service/candidat.service';
import { SendmailService } from 'src/app/service/sendmail.service';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { AnnonceService } from 'src/app/service/annonce.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private candidatSer:CandidatService,private AnnonceService:AnnonceService,private http:SendmailService,private token:TokenStorageService,private activatedRoute:ActivatedRoute) { }
  condidats=[]
   idannnce=this.activatedRoute.snapshot.params['id'];
  cand:Condidat
  idRh:any
  tab_id_candidat=[]
  ngOnInit(): void {
    this.idRh=this.token.getUser()._id;
    
    this.getCondidats()
      
      
    }
 
 
// this.candidatSer.deleteCandidat(id).subscribe(res=>{
   // this.getCondidatData()
 // })
  getCondidats(){
   
    
    this.AnnonceService.getAnnonce(this.idannnce).subscribe((data)=>{
      console.log(data.annonce.Candidats);
      
     
      

      for (let i = 0; i < data.annonce.Candidats.length; i++) {
        const element = data.annonce.Candidats[i];
     console.log(element);
     
        
        this.tab_id_candidat.push(element)
       
        
      }
      console.log(this.tab_id_candidat,'tab id condidat');
    
        for (let i = 0; i < this.tab_id_candidat.length; i++) {
          const element = this.tab_id_candidat[i];
          this.candidatSer.getCandidat(element).subscribe((data)=>{console.log(data,'data ');
          this.condidats.push(data)
          console.log(this.condidats,'tab condidat');
          })
        }
      
        
        
      })
    
    }}