import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-dubai',
  templateUrl: './dubai.component.html',
  styleUrls: ['./dubai.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class DubaiComponent implements OnInit {
  dubai:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.dubai;
    this.currentDate;
  }

  ngOnInit() {
    this.getDubai();
  }

  getDubai(){
    this._httpService.serviceGetDubai().subscribe(data=>{
      console.log('Component reached: ', data);
      this.dubai = data;
      console.log(this.dubai);
    })
  }
}
