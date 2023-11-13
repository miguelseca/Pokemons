import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css'],
})
export class PokeCardComponent {
  @Input()
  pokemon!: Pokemon;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<any>();

  constructor() {}

ssdd() {

  
}
}
