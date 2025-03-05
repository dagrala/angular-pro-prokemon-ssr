import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonListSkeletonComponent } from './ui/pokemon-list-skeleton/pokemon-list-skeleton.component';
import { PokemonListComponent } from '../../pokemons/components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'pokemons-page',
  standalone: true,
  imports: [PokemonListSkeletonComponent, PokemonListComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent implements OnInit {
  // public isLoading = signal(true);

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.isLoading.set(false);
    // }, 5000);
  }
}
