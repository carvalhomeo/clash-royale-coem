import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arena } from 'src/app/model/arena';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-arena-details',
  templateUrl: './arena-details.component.html',
  styleUrls: ['./arena-details.component.css']
})
export class ArenaDetailsComponent implements OnInit {
  public arena: Arena;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.arena = new Arena;
    return this.dataService.getArenaById(this.route.snapshot.params['id']).subscribe(data => this.arena = data);;
  }

}
