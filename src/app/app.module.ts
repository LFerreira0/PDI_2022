import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeroComponent } from './main/hero/hero.component';
import { PortifolioComponent } from './main/portifolio/portifolio.component';
import { SobreComponent } from './main/sobre/sobre.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './feedback/formulario/formulario.component';
import { ComentariosComponent } from './feedback/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FeedbackComponent,
    HeroComponent,
    PortifolioComponent,
    SobreComponent,
    FooterComponent,
    FormularioComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
