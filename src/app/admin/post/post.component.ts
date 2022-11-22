import { Component, OnInit, ViewChild } from '@angular/core';
import { Annonce } from 'src/app/models/annonce';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AnnonceService } from 'src/app/service/annonce.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  annonce = new Annonce();
  form: FormGroup;
 

  constructor(private f:FormBuilder,private annonceSer:AnnonceService) { }

  ngOnInit(): void {
    this.form=this.f.group({
      titre:[''],
      poste:[''],
      type_emploi:[''],
      mots_cles:[''],
      niveau:[''],
      langue:[''],
      description:[''],
      experience:['']
    })
  }

  insertData(){
    this.annonceSer.addAnnonce(this.annonce).subscribe(data=>console.log(data));
  
   
  }
}
