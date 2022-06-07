import { Component, OnInit } from '@angular/core';

declare var typeWriter: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  h1 = 'Olá, sou Lucas Candido Ferreira.'

  ngOnInit(): void {
    typeWriter()
  }

}
