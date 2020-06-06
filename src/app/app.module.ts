import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { SteamDetailsComponent } from './steam-details/steam-details.component';
import { ApiService} from './API/api.service';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {teamIdPipe} from './pipe/team_id.pipe';
import { teamUrlPipe } from './pipe/team_url.pipe';
import { matchIdPipe } from './pipe/match_id.pipe';
import { dataPipe } from './pipe/data.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    MatchComponent,
    MatchDetailsComponent,
    NavigationComponent,
    PlayerComponent,
    TeamComponent,
    TeamDetailsComponent,
    TopnavigationComponent,
    SteamDetailsComponent,
    teamIdPipe,
    teamUrlPipe,
    matchIdPipe,
    dataPipe

  ],
  imports: [
    BrowserModule,NgxPaginationModule, 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
