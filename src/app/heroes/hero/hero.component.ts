import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():String{
  
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{
    this.name='Spiderman'
  }

  changeAge(): void{
    this.age=25;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;

    // document.querySelector('h1')!.innerHTML='<h1>Hola desde Angular</h1>'
  }

}
