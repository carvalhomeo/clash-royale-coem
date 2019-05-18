import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourZeroFourComponent } from './error/four-zero-four/four-zero-four.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './header/navbar/arenas/arenas.component';
import { CardsComponent } from './header/navbar/cards/cards.component';
import { ChestsComponent } from './header/navbar/chests/chests.component';
import { PlayersComponent } from './header/navbar/players/players.component';
import { LeaguesComponent } from './header/navbar/leagues/leagues.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'arenas', component: ArenasComponent},
{path: 'cards', component: CardsComponent},
{path: 'chests', component: ChestsComponent},
{path: 'players', component: PlayersComponent},
{path: 'leagues', component: LeaguesComponent},
{path: '**', component: FourZeroFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
