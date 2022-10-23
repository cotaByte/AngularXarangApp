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
import { AddEventosComponent } from './eventos/add-eventos/add-eventos.component';
import { ListEventosComponent } from './eventos/list-eventos/list-eventos.component';
import { LogInComponent } from './Bforelogin/log-in/log-in.component';
import { GreetingsComponent } from './Bforelogin/greetings/greetings.component';
import { RegisterComponent } from './Bforelogin/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    ListarBandasComponent,
    ListarMiembrosComponent,
    AddMiembrosComponent,
    AddBandasComponent,
    JoinBandasComponent,
    LeaveBandasComponent,
    AddEventosComponent,
    ListEventosComponent,
    LogInComponent,
    GreetingsComponent,
    RegisterComponent
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
