import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  data:any;
  query:any;

  constructor(private _http: HttpClient) { 
  }
  
  serviceGetChicago(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetTokyo(){
    console.log('Service reached');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetSeattle(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetLosangeles(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Los+Angeles&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetNewYork(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=New+York&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetParis(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetHongKong(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Hong+Kong&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetSydney(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Sydney&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetDubai(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dubai&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetSeoul(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetLondon(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetBrazil(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Rio+De+Janeiro&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetMexico(){
    console.log('Service ');
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Mexico+City&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }

  serviceGetUserInput(userInput){
    console.log('Service reached', userInput);
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+userInput+'&APPID=c22231fe138cd14631dd69760876c6de&units=imperial');
  }


}
