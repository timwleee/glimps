import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LosAngelesComponent } from './losangeles/losangeles.component';
import { QueryComponent } from './query/query.component';
import { NewYorkComponent } from './newyork/newyork.component';
import { TokyoComponent } from './tokyo/tokyo.component';
import { ParisComponent } from './paris/paris.component';
import { HongKongComponent } from './hongkong/hongkong.component';
import { SydneyComponent } from './sydney/sydney.component';
import { DubaiComponent } from './dubai/dubai.component';
import { SeoulComponent } from './seoul/seoul.component';
import { LondonComponent } from './london/london.component';
import { BrazilComponent } from './brazil/brazil.component';
import { MexicoComponent } from './mexico/mexico.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BurbankComponent,
    SeattleComponent,
    ChicagoComponent,
    QueryComponent,
    LosAngelesComponent,
    NewYorkComponent,
    TokyoComponent,
    ParisComponent,
    HongKongComponent,
    SydneyComponent,
    DubaiComponent,
    SeoulComponent,
    LondonComponent,
    BrazilComponent,
    MexicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
