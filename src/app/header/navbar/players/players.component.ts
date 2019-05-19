import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players$: Player[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAllPlayers()
    .subscribe(data => this.players$ = data)
  }

}
