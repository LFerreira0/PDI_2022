import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { __values } from 'tslib';
import { EmailService } from './email.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  emails: Array<any> = new Array();

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {

  }

  warning: String = "";

  solicitacao = new FormGroup({
    nome: new FormControl('', Validators.required),
    _replyto: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  })


  enviar(){
    this.emailService.encaminharEmail(this.solicitacao.value).subscribe((resp: any) =>{
      if(resp.ok){
        this.warning = "Seu e-mail foi enviado com sucesso. Retornaremos contato em breve."
        this.solicitacao.reset(__values);
      }else{
        this.warning = "Ocorreu um erro ao enviar o e-mail. Tente novamente."
      }
    }, (err: any) =>{
      console.log('Erro ao enviar o e-mail', err);
    })
  }
}
