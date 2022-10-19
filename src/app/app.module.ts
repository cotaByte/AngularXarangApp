import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarBandasComponent } from './bandas/listar-bandas/listar-bandas.component';
import { ListarMiembrosComponent } from './miembros/listar-miembros/listar-miembros.component';
import { AddMiembrosComponent } from './miembros/add-miembros/add-miembros.component';
import { AddBandasComponent } from './bandas/add-bandas/add-bandas.component';
import { JoinBandasComponent } from './bandas/join-bandas/join-bandas.component';
import { LeaveBandasComponent } from './bandas/leave-bandas/leave-bandas.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarBandasComponent,
    ListarMiembrosComponent,
    AddMiembrosComponent,
    AddBandasComponent,
    JoinBandasComponent,
    LeaveBandasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
