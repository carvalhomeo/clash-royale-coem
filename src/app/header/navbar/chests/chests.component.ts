import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Chest } from 'src/app/model/chest';

@Component({
  selector: 'app-chests',
  templateUrl: './chests.component.html',
  styleUrls: ['./chests.component.css']
})
export class ChestsComponent implements OnInit {
  chests$: Chest[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAllChests()
    .subscribe(data => this.chests$ = data)
  }

}
