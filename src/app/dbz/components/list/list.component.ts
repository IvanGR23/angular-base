import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


@Input()
public characterList: Character[]=[{
  name:'Trunks',
  power:10
}]

@Output()
public onDelete: EventEmitter<string>= new EventEmitter();

// onDelete = Index value : number

onDeleteCharacter(id?:string):void{
  //TODO: Emitir el ID del presonaje
  //if(!id) return;
  this.onDelete.emit(id);
}
}
