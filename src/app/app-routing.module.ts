import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';

const routes: Routes = [
  {path: 'lancamentos', loadChildren:  () => import ('./lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  {path: 'pessoas', loadChildren: () => import ('./pessoas/pessoas.module').then(m => m.PessoasModule) },
  {path: 'dashboard', loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: 'relatorios', loadChildren: () => import ('./relatorios/relatorios.module').then(m => m.RelatoriosModule) },


  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'nao-autorizado', component: NaoAutorizadoComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'pagina-nao-encontrada'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
