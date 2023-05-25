import { Component } from '@angular/core';
import { POKEMON } from 'src/app/mocks/pokemon.mocks';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
overMouse:boolean=false;
pokemons=  POKEMON;
imgPokebolaAbierta:string="../../../assets/images/pokebolaAbierta.png"


cambiarImg(estado:boolean, id:number){

  if(estado){
    this.pokemons[id].imgActual=this.imgPokebolaAbierta

  }else if(!estado){
    this.pokemons[id].imgActual=this.pokemons[id].img
  }

}

}
