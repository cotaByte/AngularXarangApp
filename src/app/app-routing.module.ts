import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBandasComponent } from './bandas/add-bandas/add-bandas.component';
import { ListarBandasComponent } from './bandas/listar-bandas/listar-bandas.component';
import { ListarMiembrosComponent } from './miembros/listar-miembros/listar-miembros.component';

const routes: Routes = [
  {
    path: 'listarBandas', component: ListarBandasComponent
  },
  {
    path: 'listarMiembros', component: ListarMiembrosComponent

  },
  {
    path: 'addBanda', component: AddBandasComponent
  }



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
