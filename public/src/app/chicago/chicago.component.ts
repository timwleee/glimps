import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { trigger } from '@angular/animations';
import { state } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style( { opacity:0 } ),
        animate(1000)
      ]),
    ])
  ]
})

export class ChicagoComponent implements OnInit {
  chicago:any;
  currentDate = new Date();

constructor(
  private _httpService: HttpService,
  private _route: ActivatedRoute,
  private _router: Router
) {
  this.chicago;
  this.currentDate;
}

  ngOnInit() {
    this.getChicago();
  }

  getChicago() {
    this._httpService.serviceGetChicago().subscribe(data=>{
      console.log('Component reached: ', data);
      this.chicago = data;
      console.log(this.chicago);
    })
  }

}
