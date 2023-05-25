import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-others',
  templateUrl: './pokemon-others.component.html',
  styleUrls: ['./pokemon-others.component.css']
})
export class PokemonOthersComponent {
@Input() img: string | undefined
}
