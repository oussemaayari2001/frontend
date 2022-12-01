import { Component, OnInit } from '@angular/core';
import { Condidat } from 'src/app/models/condidat.model';

import { CandidatService } from 'src/app/service/candidat.service';
import { SendmailService } from 'src/app/service/sendmail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private candidatSer:CandidatService,private http:SendmailService) { }
  condidats:Condidat[]
  cand:Condidat
  ngOnInit(): void {
  this.getCondidatData()
 }
// this.candidatSer.deleteCandidat(id).subscribe(res=>{
   // this.getCondidatData()
 // })
  Accepter(c){
  console.log( c["email"]);
  this.http.sendEmail( c).subscribe(
  data => {
      let res:any = data; 
      console.log(
          `👏 > 👏 > 👏 > 👏 ${c.nom} is successfully register and mail has been sent with ${res} }`
        );
      },
      err => {
        console.log(err);
       
      }
    );

  }
  getCondidatData(){
       this.candidatSer.getCandidats().subscribe(data=>this.condidats=data)
    };
  }




