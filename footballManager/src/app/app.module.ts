import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LigaComponent } from './liga/liga.component';
import { LigueComponent } from './ligue/ligue.component';
import { TeamComponent } from './team/team.component';
import { MarketComponent } from './market/market.component';
import { TransferMarketComponent } from './transfer-market/transfer-market.component';
import { SoccerDayComponent } from './soccer-day/soccer-day.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LigaComponent,
    LigueComponent,
    TeamComponent,
    MarketComponent,
    TransferMarketComponent,
    SoccerDayComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
