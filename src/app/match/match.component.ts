import { Component, OnInit } from '@angular/core';
import { match } from 'src/app/get/match.module';
import { ApiService } from 'src/app/API/api.service';
import { team } from 'src/app/get/team.module';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],

})
export class MatchComponent implements OnInit {

  m : match[];
  t : team[];


  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getmatches();
    this.getteams();
  }
  getmatches(){
    this.apiService.getmatch().subscribe(match=>{
      this.m = match;
      console.log(this.m);
    });
  }
  getteams(){
    this.apiService.getteam().subscribe(team=>{
      this.t = team;
      console.log(this.t);
    });
  }

}

