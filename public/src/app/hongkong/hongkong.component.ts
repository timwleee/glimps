import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-hongkong',
  templateUrl: './hongkong.component.html',
  styleUrls: ['./hongkong.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class HongKongComponent implements OnInit {
  hongkong:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.hongkong;
    this.currentDate;
  }

  ngOnInit() {
    this.getHongKong();
  }

  getHongKong(){
    this._httpService.serviceGetHongKong().subscribe(data=>{
      console.log('Component reached: ', data);
      this.hongkong = data;
      console.log(this.hongkong);
    })
  }
}
