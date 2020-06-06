import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { match } from 'src/app/get/match.module';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { team } from 'src/app/get/team.module';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  @Input()
    matchid: String;
    m:match[];
    t : team[];

    constructor(private apiService:ApiService,
                private route:ActivatedRoute,
                private location:Location) { }

  ngOnInit() {
    this.getmatchid();
    this.getdata();
    this.getteams();
  }
  getdata(){
      this.apiService.getmatch().subscribe(match=>{
      this.m = match;
      console.log(this.m);
    });
  }

  getmatchid(){
     this.matchid = this.route.snapshot.paramMap.get('id');
    console.log(this.matchid);
  }

  getteams(){
    this.apiService.getteam().subscribe(team=>{
      this.t = team;
      console.log(this.t);
    });
  }
  goBack():void{
    this.location.back();
  }
}
