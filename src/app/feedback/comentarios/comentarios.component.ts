import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  comentarios: Array<any> = new Array();

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.listarComentarios();
  }

  listarComentarios(){
    this.comentariosService.listarComentarios().subscribe(comentarios =>{
      this.comentarios = comentarios;
    }, err =>{
      console.log('Erro ao listar comentários', err);
    })
  }

}
