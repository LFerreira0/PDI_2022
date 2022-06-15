import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  warning: String = "";

  solicitacao = new FormGroup({
    nome: new FormControl('', Validators.required),
    _replyto: new FormControl('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  })

  enviar(){
    this.http.post("https://formspree.io/f/mzboylar", this.solicitacao.value).subscribe(resp => {
       this.warning = "Obrigado pelo seu e-mail. Retornaremos contato em breve.";
       this.solicitacao.reset(__values);
    })
  }
}
