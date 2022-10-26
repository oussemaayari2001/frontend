import { Component, OnInit, ViewChild } from '@angular/core';
import { Condidat } from '../../models/condidat.model';
import { NgModule } from '@angular/core';
import { DataService } from '../../service/data.service';
import { DashboardComponent } from 'src/app/admin/dashboard/dashboard.component';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  @ViewChild("dashboard") dashboard: DashboardComponent;
  condidat = new Condidat();
  selectedType = 'openType';
  data:any;
  form:FormGroup;
onChange(event) {
  this.selectedType = event.target.value;
}
  constructor( private dataService:DataService, private toastr: ToastrService,private f:FormBuilder) { }


  ngOnInit(): void {
    this.form=this.f.group({
      nom:[''],
      email:[''],
      profil:[''],
      linkedIn:['']
    })
    console.log(this.condidat)
  }

  insertData(){
    console.log(this.condidat)
    let idCandidat=JSON.parse(localStorage.getItem("idCandidat")|| '1')
    let candidats=JSON.parse(localStorage.getItem("candidats")|| '[]')
    this.condidat.id=idCandidat
    candidats.push(this.condidat)
    localStorage.setItem("candidats",JSON.stringify(candidats))
    localStorage.setItem("candidatID",JSON.stringify(idCandidat+1))

    //  console.log('hello');
    //  this.dataService.insertData(this.condidat).subscribe( res => {
    //   console.log(res);
    //    this.dashboard.getCondidatData();
   //  })
  }
}
