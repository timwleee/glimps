import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class QueryComponent implements OnInit {
  @Input()
  userInput:any;
  currentDate = new Date();


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.userInput;
    this.currentDate;
  }

  ngOnInit() {
  }

  getUserInput(userInput){ 
    console.log('Component reached', userInput);
    this._httpService.serviceGetUserInput(userInput).subscribe(data=>{
      console.log('Component received data from service', data);
      this.userInput = data;
    })
  }
}
