import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchComponent } from './match/match.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes =[
  {path:'matchdetails/:id',component:MatchDetailsComponent},
  {path:'match',component:MatchComponent},
  {path:'team',component:TeamComponent},
  {path:'player',component:PlayerComponent},
  {path:'team-details/:id',component:TeamDetailsComponent},
  {path:'',redirectTo:'/match',pathMatch:'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})

export class AppRoutingModule { }