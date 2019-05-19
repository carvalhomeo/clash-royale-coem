import { Component, OnInit } from '@angular/core';
import { Arena } from 'src/app/model/arena';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.css']
})
export class ArenasComponent implements OnInit {
  arenas$: Arena[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getAllArenas()
    .subscribe(data => this.arenas$ = data)
  }

}
