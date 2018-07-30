import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class TokyoComponent implements OnInit {
  tokyo:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.tokyo;
    this.currentDate;
  }

  ngOnInit() {
    this.getTokyo();
  }

  getTokyo(){
    this._httpService.serviceGetTokyo().subscribe(data=>{
      console.log('Component reached: ', data);
      this.tokyo = data;
      console.log(this.tokyo);
    })
  }
}
