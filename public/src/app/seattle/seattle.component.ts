import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class SeattleComponent implements OnInit {
  seattle:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.seattle;
    this.currentDate;
  }

  ngOnInit() {
    this.getSeattle();
  }

  getSeattle(){
    this._httpService.serviceGetSeattle().subscribe(data=>{
      console.log('Component reached: ', data);
      this.seattle = data;
      console.log(this.seattle);
    })
  }
}
