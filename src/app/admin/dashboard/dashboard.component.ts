import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  condidat:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getCondidatData();
  }

  getCondidatData(){
    this.dataService.getData().subscribe(res => {
      this.condidat = res;
    });
  }

  deleteData(id){
    // console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getCondidatData();
    })
  }

}
