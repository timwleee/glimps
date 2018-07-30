import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-sydney',
  templateUrl: './sydney.component.html',
  styleUrls: ['./sydney.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class SydneyComponent implements OnInit {
  sydney:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.sydney;
    this.currentDate;
  }

  ngOnInit() {
    this.getSydney();
  }

  getSydney(){
    this._httpService.serviceGetSydney().subscribe(data=>{
      console.log('Component reached: ', data);
      this.sydney = data;
      console.log(this.sydney);
    })
  }
}
