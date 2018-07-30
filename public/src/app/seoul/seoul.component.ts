import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-seoul',
  templateUrl: './seoul.component.html',
  styleUrls: ['./seoul.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter, :leave', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class SeoulComponent implements OnInit {
  seoul:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.seoul;
    this.currentDate;
  }

  ngOnInit() {
    this.getSeoul();
  }

  getSeoul(){
    this._httpService.serviceGetSeoul().subscribe(data=>{
      console.log('Component reached: ', data);
      this.seoul = data;
      console.log(this.seoul);
    })
  }
}
