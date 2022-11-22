import { Component, OnInit, ViewChild } from '@angular/core';
import { Condidat } from '../../models/condidat.model';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CandidatService } from 'src/app/service/candidat.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @ViewChild("dashboard") dashboard: DashboardComponent;
  condidat = new Condidat();
  selectedType = 'openType';
  form:FormGroup;
onChange(event) {
  this.selectedType = event.target.value;
}
  constructor( private f:FormBuilder,private candidatSer:CandidatService) { }


  ngOnInit(): void {
    this.form=this.f.group({
      nom:[''],
      email:['',Validators.email],
      profil:[''],
      linkedIn:[''],
      niveau:[''],
      ecole_de_licence:[''],
      ecole_ingenieur:[''],
      ecole_master:[''],
      competence:[''],
      grade:[''],
      file:['']
    })
   
  }

  insertData(){
    this.candidatSer.addCandidat(this.condidat).subscribe(data=>console.log(data));
  
  }
}
