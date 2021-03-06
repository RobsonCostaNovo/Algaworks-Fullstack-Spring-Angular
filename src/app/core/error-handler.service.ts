import { NotAuthenticatedError } from './../seguranca/money-http-interceptor';
import { ToastyService } from 'ng2-toasty';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class ErrorHandlerService {

  constructor(private toasty: ToastyService,
              private router: Router) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou!';
      this.router.navigate(['/login']);


    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {

      msg = 'Ocorreu um erro ao processar a sua solicitação';
      if (errorResponse.status === 403) {
        msg = 'Usuário não tem permissão para executar essa função';
      }

      try {
        const httpErrorResponse = new HttpErrorResponse(errorResponse);
        msg = httpErrorResponse.error[0].mensagemUsuario;
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {

      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);

    }

    this.toasty.error(msg);
  }

}
