import { NotFoundComponent } from './view/not-found/not-found.component';
import { UpdateAgendamentoComponent } from './view/agendamento/update-agendamento/update-agendamento.component';
import { SpinnerComponent } from './view/spinner/spinner.component';
import { AgendamentosComponent } from './view/agendamento/agendamentos/agendamentos.component';
import { ServicoComponent } from './view/servico/servico.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { AgendamentoComponent } from './view/agendamento/agendamento.component';
import { AdminComponent } from './view/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { TelaBarbeiroComponent } from './view/tela-barbeiro/tela-barbeiro.component';
import { TelaClienteComponent } from './view/tela-cliente/tela-cliente.component';
import { ServicoListComponent } from './view/servico/servico-list/servico-list.component';
import { PerfilClienteComponent } from './view/perfil-cliente/perfil-cliente.component';
import { ServicoListBarbeiroComponent } from './view/servico/servico-list-barbeiro/servico-list-barbeiro.component';
import { TelaClienteAdminComponent } from './view/tela-cliente/tela-cliente-admin/tela-cliente-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agendamento/novo/:id', component: AgendamentoComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'admin', component: AdminComponent, data: { requiredRoles: ['admin'] } },
  { path: "agendamento/:id", component: UpdateAgendamentoComponent },
  { path: 'carregando', component: SpinnerComponent },
  { path: 'cadastro', component: CadastroComponent },
  {
    path: 'telaBarbeiro', component: TelaBarbeiroComponent,
    children: [{ path: 'serv', component: ServicoComponent },
    { path: 'agend', component: AgendamentosComponent, },
    { path: 'servlist', component: ServicoListBarbeiroComponent, }]
  },
  {
    path: 'telaCliente', component: TelaClienteComponent,
    children: [
      { path: 'serv', component: ServicoComponent },
      { path: 'agend', component: AgendamentosComponent, },
      { path: 'agendamento/novo/:id', component: AgendamentoComponent },
      { path: 'servlist', component: ServicoListComponent, }
    ],
  },
  { path: 'portfolio', component: PortfolioComponent, },
  { path: 'servico', component: ServicoComponent, },
  { path: 'servicoList', component: ServicoListComponent },
  { path: 'perfilCliente/:email', component: PerfilClienteComponent, },
  { path: 'telaBarbeiro/:email', component: TelaBarbeiroComponent, },
  { path: 'telaClienteAdmin', component: TelaClienteAdminComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
