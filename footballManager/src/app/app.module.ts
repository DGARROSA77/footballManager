import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LigueComponent } from './components/ligue/ligue.component';
import { TeamComponent } from './components/team/team.component';
import { TransferMarketComponent } from './Components/transfer-market/transfer-market.component'
import { SoccerDayComponent } from './components/soccer-day/soccer-day.component';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LigueComponent,
    TeamComponent,
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
