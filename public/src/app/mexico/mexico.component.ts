import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';


@Component({
  selector: 'app-mexico',
  templateUrl: './mexico.component.html',
  styleUrls: ['./mexico.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class MexicoComponent implements OnInit {
  mexico:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.mexico;
    this.currentDate;
  }

  ngOnInit() {
    this.getMexico();
  }

  getMexico(){
    this._httpService.serviceGetMexico().subscribe(data=>{
      console.log('Component reached: ', data);
      this.mexico = data;
      console.log(this.mexico);
    })
  }
}
