import { Component, OnInit } from '@angular/core';
import { League } from 'src/app/model/league';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
leagues$: League[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAllLeagues()
    .subscribe(data => this.leagues$ = data)
  }

}
