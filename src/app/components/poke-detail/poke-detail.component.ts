import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent {
  @Input()
  pokemon!: Pokemon;


  onExit() {
    
 }
}
