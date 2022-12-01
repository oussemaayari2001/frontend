import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormulaireComponent } from './condidat/formulaire/formulaire.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './admin/post/post.component';
import { SignupComponent } from './admin/dashboard/signup/signup.component';
import { GestionAnnonceComponent } from './admin/gestion-annonce/gestion-annonce.component';

const routes: Routes = [
  {path:'acceuil', component:HomeComponent},
  {path:'add_candidat', component:FormulaireComponent},
  {path:'profils', component:DashboardComponent},
  {path:'about_us', component:AboutUsComponent},
  {path:'add_annonce', component:PostComponent},
  {path:'login', component:LoginComponent},
  {path:'annonce',component:GestionAnnonceComponent},
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  {path:'signup',component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
