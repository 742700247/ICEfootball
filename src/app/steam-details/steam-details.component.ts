import { Component, OnInit, Input } from '@angular/core';
import { match } from 'src/app/get/match.module';
import { team } from 'src/app/get/team.module';
import { table } from 'src/app/get/table.module';
import { ApiService } from 'src/app/API/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-steam-details',
  templateUrl: './steam-details.component.html',
  styleUrls: ['./steam-details.component.css']
})
export class SteamDetailsComponent implements OnInit {
  @Input()
  matchid: String;
  teamid:String;
  m:match[];
  SCHEDULEDm:match[];
  t : team[];
  stand:table[];

  constructor(private apiService:ApiService,
              private route:ActivatedRoute,
              ) { }

ngOnInit() {
  this.getmatchid();
  this.getSCHEDULEDmatch();
  this.getteams();
  this.getteamid();
}
getSCHEDULEDmatch(){
  this.apiService.getSCHEDULEDmatch().subscribe(match=>{
    this.SCHEDULEDm = match;
    console.log(this.SCHEDULEDm);
  })
 }
getmatchid(){
   this.matchid = this.route.snapshot.paramMap.get('id');
  console.log(this.matchid);
}
getteamid(){
this.teamid = this.route.snapshot.paramMap.get('id');
console.log(this.teamid);
}
getteams(){
  this.apiService.getteam().subscribe(team=>{
    this.t = team;
    console.log(this.t);
  });
}

}
