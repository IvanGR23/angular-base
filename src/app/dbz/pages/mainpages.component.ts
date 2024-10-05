import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mainpages',
  templateUrl: './mainpages.component.html',
  styleUrl: './mainpages.component.css'
})
export class MainpagesComponent {

  constructor(private dbzService: DbzService){}

  get characters():Character[]{
   return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character)

  }
  
}
