import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-brazil',
  templateUrl: './brazil.component.html',
  styleUrls: ['./brazil.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter, :leave', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class BrazilComponent implements OnInit {
  brazil:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.brazil;
    this.currentDate;
  }

  ngOnInit() {
    this.getBrazil();
  }

  getBrazil(){
    this._httpService.serviceGetBrazil().subscribe(data=>{
      console.log('Component reached: ', data);
      this.brazil = data;
      console.log(this.brazil);
    })
  }
}
