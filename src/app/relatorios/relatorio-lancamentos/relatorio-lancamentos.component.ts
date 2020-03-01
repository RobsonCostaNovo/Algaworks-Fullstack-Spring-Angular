import { RelatoriosService } from './../relatorios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-lancamentos',
  templateUrl: './relatorio-lancamentos.component.html',
  styleUrls: ['./relatorio-lancamentos.component.css']
})
export class RelatorioLancamentosComponent implements OnInit {

  periodoInicio: Date;
  periodoFim: Date;

  constructor(private relatoriosService: RelatoriosService) { }

  ngOnInit() {
  }

  gerar() {
    this.relatoriosService.relatorioLancamentosPorPessoa(this.periodoInicio, this.periodoFim)
      .then(relatorio => {
        const url = window.URL.createObjectURL(relatorio);
        window.open(url);
      });


    // this.relatoriosService.relatorioLancamentosPorPessoa(this.periodoInicio, this.periodoFim)
    //   .then(relatorio => {
    //     // isso já é feito
    //     const url = window.URL.createObjectURL(relatorio);
    //     // aqui você criar um link, ou seja, um elemento que representa uma tag do tipo <a></a>
    //     const link = document.createElement('a');
    //     // aqui você adiciona o atributo href desse elemento. Ficaria <a href="<o link q vc gerou acima>"></a>
    //     link.href = url;
    //     // aqui você adiciona o atributo download do elemento (que é o nome que vai aparecer na hora que o usuário
    //     // for baixar o arquivo. Vamos dizer que é "meu-relatorio.pdf".
    //     // Nesse ponto o elemento estará assim: <a href="http://localhost:4200/hash-aleatorio" download="meu-relatorio.pdf"></a>
    //     link.download = 'meu-relatorio.pdf';
    //     // aqui você vai forçar o clique nesse link. O que vai pedir pro usuário fazer o download, com o nome q vc indicou
    //     link.click();
    // });
  }


}
