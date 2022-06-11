import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome: String = "";
  email: String = "";
  mensagem: String = "";
  habilitarBotao: Boolean = false;

  enviar(){
  }

  validarPreenchimento(){
    if(this.nome && this.email && this.mensagem){
      this.habilitarBotao = true;
    }else{
      this.habilitarBotao = false;
    }
  }
}
