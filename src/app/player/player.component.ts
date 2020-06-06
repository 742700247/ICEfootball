import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/API/api.service';
import { player } from 'src/app/get/player.module';
import { team } from 'src/app/get/team.module';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  p:player[];
  t : team[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.getdata();
    this.getteams();
  }
  getteams(){
    this.apiService.getteam().subscribe(team=>{
      this.t = team;
      console.log(this.t);
    });
  }
   getdata(){
    this.apiService.getplayer().subscribe(player=>{
      this.p = player;
      console.log(this.p);
  });
}
}
