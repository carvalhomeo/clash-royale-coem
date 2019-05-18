import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FourZeroFourComponent } from './error/four-zero-four/four-zero-four.component';
import { HomeComponent } from './home/home.component';
import { ArenasComponent } from './header/navbar/arenas/arenas.component';
import { CardsComponent } from './header/navbar/cards/cards.component';
import { ChestsComponent } from './header/navbar/chests/chests.component';
import { PlayersComponent } from './header/navbar/players/players.component';
import { LeaguesComponent } from './header/navbar/leagues/leagues.component';
import { ArenaDetailsComponent } from './header/navbar/arenas/arena-details/arena-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    FourZeroFourComponent,
    HomeComponent,
    ArenasComponent,
    CardsComponent,
    ChestsComponent,
    PlayersComponent,
    LeaguesComponent,
    ArenaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
