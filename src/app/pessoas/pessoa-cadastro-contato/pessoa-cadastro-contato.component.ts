import { Component, OnInit, Input } from '@angular/core';
import { Contato } from 'src/app/core/model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pessoa-cadastro-contato',
  templateUrl: './pessoa-cadastro-contato.component.html',
  styleUrls: ['./pessoa-cadastro-contato.component.css']
})
export class PessoaCadastroContatoComponent implements OnInit {

  @Input() contatos: Array<Contato>;
  contato: Contato;
  exibindoFormularioContato = false;
  contatoIndex: number;

  constructor() { }

  ngOnInit() {
  }

  prepararNovoContato() {
    this.exibindoFormularioContato = true;
    this.contato = new Contato();
    this.contatoIndex = this.contatos.length;
  }

  confirmarContato(fContato: FormControl) {
    console.log('confirmando contato');
    this.contatos[this.contatoIndex] = this.clonarContato(this.contato);
    this.exibindoFormularioContato = false;
    fContato.reset();
  }

  prepararEdicaoContato(contato: Contato, index: number) {
    console.log('preparando edição ..');
    this.contato = this.clonarContato(contato);
    console.log('preparando edição 2 ..');
    this.exibindoFormularioContato = true;
    console.log('preparando edição 3 ..');
    this.contatoIndex = index;
    console.log('preparando edição 4 ..');
  }

  removerContato(index: number) {
    this.contatos.splice(index, 1);
  }

  clonarContato(contato: Contato) {
    return new Contato(contato.codigo, contato.nome, contato.email, contato.telefone);
  }

  get editando() {
    return this.contato && this.contato.codigo;
  }
}
