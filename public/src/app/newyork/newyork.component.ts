import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class NewYorkComponent implements OnInit {
  newyork:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.newyork;
    this.currentDate;
  }

  ngOnInit() {
    this.getNewYork();
  }

  getNewYork(){
    this._httpService.serviceGetNewYork().subscribe(data=>{
      console.log('Component reached: ', data);
      this.newyork = data;
      console.log(this.newyork);
    })
  }
}
