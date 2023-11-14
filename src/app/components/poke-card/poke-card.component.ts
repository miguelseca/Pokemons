import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../../models/pokemon';
import { TestDirective } from 'src/app/directives/test.directive';
import { HighlightedDirective } from 'src/app/directives/highlighted.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CommonModule, TestDirective,HighlightedDirective],
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css'],
})
export class PokeCardComponent {
  @Input()
  pokemon!: Pokemon;

  @Output('pokemonSelected')
  pokemonSelected = new EventEmitter<Pokemon>();

  constructor(private router: Router) {}

  onSelectDetails() {
     this.pokemonSelected.emit(this.pokemon);
     this.router.navigate(['poke-detail', this.pokemon.id]);
  }
}
