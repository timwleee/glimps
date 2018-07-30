import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    @Output()

    userInput:any;
    data:any;
    currentDate = new Date();

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {


    this.userInput;
    this.data;
    this.currentDate;
  }

  ngOnInit(){

  }

  changePic(){
    
  }


}
