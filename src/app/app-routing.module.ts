import { registerLocaleData } from '@angular/common';
import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaComponent } from './afterLogin/entrada/entrada.component';
import { NavbarComponent } from './afterLogin/navbar/navbar.component';
import { AddBandasComponent } from './bandas/add-bandas/add-bandas.component';
import { JoinBandasComponent } from './bandas/join-bandas/join-bandas.component';
import { LeaveBandasComponent } from './bandas/leave-bandas/leave-bandas.component';
import { ListarBandasComponent } from './bandas/listar-bandas/listar-bandas.component';
import { GreetingsComponent } from './Bforelogin/greetings/greetings.component';
import { LogInComponent } from './Bforelogin/log-in/log-in.component';
import { RegisterComponent } from './Bforelogin/register/register.component';
import { AddEventosComponent } from './eventos/add-eventos/add-eventos.component';
import { ListEventosComponent } from './eventos/list-eventos/list-eventos.component';
import { AddMiembrosComponent } from './miembros/add-miembros/add-miembros.component';
import { ListarMiembrosComponent } from './miembros/listar-miembros/listar-miembros.component';

const routes: Routes = [

  {
    path: '',
    component: GreetingsComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'listarBandas',
    component: ListarBandasComponent,
  },
  {
    path: 'listarMiembros',
    component: ListarMiembrosComponent,
  },
  {
    path: 'addBanda',
    component: AddBandasComponent,
  },
  {
    path: 'addMiembro',
    component: AddMiembrosComponent,
  },
  {
    path: 'addEvento',
    component: AddEventosComponent,
  },
  {
    path: 'listarEventos',
    component: ListEventosComponent,
  },
  {
    path: 'greetings',
    component: EntradaComponent,
  },  
{
  path :'navbar',
  component: NavbarComponent
},
{
  path :'joinBandas',
  component: JoinBandasComponent
},
{
  path :'leaveBandas',
  component: LeaveBandasComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
