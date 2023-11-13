import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(number: Number): Observable<Pokemon> {
    console.log (number);
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${number}`);
  }


}
