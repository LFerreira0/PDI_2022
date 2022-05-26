import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { SobreComponent } from './sobre/sobre.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    HeroComponent,
    SobreComponent,
    PortifolioComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
