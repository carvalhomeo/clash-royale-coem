import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards$: Card[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAllCards()
    .subscribe(data => this.cards$ = data)
  }

}
