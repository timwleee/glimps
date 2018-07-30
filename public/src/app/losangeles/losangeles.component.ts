import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-losangeles',
  templateUrl: './losangeles.component.html',
  styleUrls: ['./losangeles.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class LosAngelesComponent implements OnInit {
  losangeles:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.losangeles;
    this.currentDate;
  }

  ngOnInit() {
    this.getLosangeles();
  }

  getLosangeles(){
    this._httpService.serviceGetLosangeles().subscribe(data=>{
      console.log('Component reached: ', data);
      this.losangeles = data;
      console.log(this.losangeles);
    })
  }
}
