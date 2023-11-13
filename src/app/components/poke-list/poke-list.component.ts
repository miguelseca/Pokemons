import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { PokeCardComponent } from '../poke-card/poke-card.component';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [CommonModule, PokeCardComponent],
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  pokedex: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    for (let i = 4; i < 40; i++) {
      this.pokemonService
        .getPokemon(i)
        .subscribe((result) => this.pokedex.push(result));
    }
  }

  onPokemonSelected($event: any) {
    console.log($event);
  }
}
