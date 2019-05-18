import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourZeroFourComponent } from './error/four-zero-four/four-zero-four.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './header/navbar/arenas/arenas.component';
import { CardsComponent } from './header/navbar/cards/cards.component';
import { ChestsComponent } from './header/navbar/chests/chests.component';
import { PlayersComponent } from './header/navbar/players/players.component';
import { LeaguesComponent } from './header/navbar/leagues/leagues.component';
import { ArenaDetailsComponent } from './header/navbar/arenas/arena-details/arena-details.component';
import { CardsDetailsComponent } from './header/navbar/cards/cards-details/cards-details.component';
import { ChestsDetailsComponent } from './header/navbar/chests/chests-details/chests-details.component';
import { PlayersDetailsComponent } from './header/navbar/players/players-details/players-details.component';
import { LeaguesDetailsComponent } from './header/navbar/leagues/leagues-details/leagues-details.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'arenas', children: [
  {path: '', component: ArenasComponent},
  {path: ':id', component: ArenaDetailsComponent}
]},
{path: 'cards', children: [
  {path: '', component: CardsComponent},
  {path: ':id', component: CardsDetailsComponent}
]},
{path: 'chests', children: [
  {path: '', component: ChestsComponent},
  {path: ':id', component: ChestsDetailsComponent}
]},
{path: 'players', children: [
  {path: '', component: PlayersComponent},
  {path: ':id', component: PlayersDetailsComponent}
]},
{path: 'leagues', children: [
  {path: '', component: LeaguesComponent},
  {path: ':id', component: LeaguesDetailsComponent}
]},
{path: '**', component: FourZeroFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
