import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Arena } from '../model/arena';
import { Card } from '../model/card';
import { Chest } from '../model/chest';
import { League } from '../model/league';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://www.clashapi.xyz';
  constructor(private http: HttpClient) { }

  getAllArenas(){return this.http.get<Arena[]>(`${this.apiUrl}/api/arenas`);}
  getArenaById(id){return this.http.get<Arena>(`${this.apiUrl}/api/arenas/${id}`);}

  getAllCards(){return this.http.get<Card[]>(`${this.apiUrl}/api/cards`);}
  getCardById(id){return this.http.get<Card>(`${this.apiUrl}/api/cards/${id}`);}

  getAllChests(){return this.http.get<Chest[]>(`${this.apiUrl}/api/chests`);}
  getChestById(id){return this.http.get<Chest>(`${this.apiUrl}/api/chests/${id}`);}

  getAllLeagues(){return this.http.get<League[]>(`${this.apiUrl}/api/leagues`);}
  getLeagueById(id){return this.http.get<League>(`${this.apiUrl}/api/leagues/${id}`);}

  getAllPlayers(){return this.http.get<Player[]>(`${this.apiUrl}/api/players`);}
  getPlayerById(id){return this.http.get<Player>(`${this.apiUrl}/api/players/${id}`);}
}
