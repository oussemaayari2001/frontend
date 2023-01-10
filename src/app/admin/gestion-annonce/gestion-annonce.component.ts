import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/token-storage-service.service';
import { AnnonceService } from 'src/app/service/annonce.service';
@Component({
  selector: 'app-gestion-annonce',
  templateUrl: './gestion-annonce.component.html',
  styleUrls: ['./gestion-annonce.component.css']
})
export class GestionAnnonceComponent implements OnInit {
 annonces = [
//   {title:'PFE Master',motscles:'Angular',experience:'4 ans ou plus',niveau:'bac+5',langue:'Francais,Anglais',description:'',date_dajout:'28/11/2022'},
//  { title:'PFE',motscles:'Node Js',experience:'3 ans ou plus',niveau:'bac+3',langue:'Francais',description:'',mot_cles:'DevOps,.Net',date_dajout:'28/11/2022'},
//  { title:"Annonce d'embauchement1",motscles:'React,Node Js',experience:'3 ans ou plus',niveau:'bac+3',langue:'Francais',description:'',mot_cles:'DevOps,.Net',date_dajout:'28/11/2022'},
//  { title:"Annonce d'embauchement2",motscles:'React,Node Js',experience:'3 ans ou plus',niveau:'bac+4',langue:'Francais',description:'',mot_cles:'DevOps,.Net',date_dajout:'28/11/2022'},
//  { title:"Annonce d'embauchement3",motscles:'DevOps,.Net,architecture microservices',experience:'3 ans ou plus',niveau:'bac+5',langue:'Francais',description:'',date_dajout:'28/11/2022'},

]
tabIdAnnonces=[]
idRh:any
  constructor(private token:TokenStorageService,private AnnonceService:AnnonceService) { }

  ngOnInit(): void {
    this.tabIdAnnonces=this.token.getUser().annonces

    console.log(this.tabIdAnnonces);
    
this.idRh=this.token.getUser()._id;
console.log(this.idRh);

this.getAnnonces()



  }
  getAnnonces(){
    
    for (let i = 0; i < this.tabIdAnnonces.length; i++) {
      const element = this.tabIdAnnonces[i];
      this.AnnonceService.getAnnonce(element).subscribe((n)=>{
        console.log('Annonce : ',n);
        
        
        this.annonces.push(n)
       
      })
  
      
      
    }
  }


}
