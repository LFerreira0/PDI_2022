import { Component, OnInit } from '@angular/core';

declare var efeitos: any;

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    efeitos();
  }

}
