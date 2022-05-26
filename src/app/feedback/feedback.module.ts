import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FeedbackComponent } from './feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: FeedbackComponent }
]

@NgModule({
  declarations: [
    FeedbackComponent,
    FormularioComponent,
    ComentariosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule
  ]
})
export class FeedbackModule { }



