import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class ParisComponent implements OnInit {
  paris:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.paris;
    this.currentDate;
  }

  ngOnInit() {
    this.getParis();
  }

  getParis(){
    this._httpService.serviceGetParis().subscribe(data=>{
      console.log('Component reached: ', data);
      this.paris = data;
      console.log(this.paris);
    })
  }
}
