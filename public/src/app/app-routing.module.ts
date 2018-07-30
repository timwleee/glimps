import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { LosAngelesComponent } from './losangeles/losangeles.component';
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
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  { path: 'seattle',component: SeattleComponent },
  { path: '',component: ChicagoComponent },
  { path: 'losangeles',component: LosAngelesComponent },
  { path: 'newyork',component: NewYorkComponent },
  { path: 'tokyo',component: TokyoComponent },
  { path: 'paris',component: ParisComponent },
  { path: 'hongkong',component: HongKongComponent },
  { path: 'sydney',component: SydneyComponent },
  { path: 'dubai',component: DubaiComponent },
  { path: 'seoul',component: SeoulComponent },
  { path: 'london',component: LondonComponent },
  { path: 'search',component: QueryComponent },
  { path: 'mexico',component: MexicoComponent },
  { path: 'brazil',component: BrazilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
