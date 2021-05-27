import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LigueComponent } from './Components/ligue/ligue.component';
import { LoginComponent } from './Components/login/login.component';
import { PlayersComponent } from './Components/players/players.component';
import { SoccerDayComponent } from './Components/soccer-day/soccer-day.component';
import { TeamComponent } from './Components/team/team.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'ligue', component: LigueComponent },
  { path: 'login', component: LoginComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'soccerDay', component: SoccerDayComponent },
  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '/home' } // cuando no exista la ruta que nos rediriga a: en este caso home.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
