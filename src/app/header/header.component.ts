import { Component, OnInit } from '@angular/core';

declare var toogleMenu: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menu(){
    toogleMenu();
  }
}
