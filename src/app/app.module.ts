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
import { NavbarComponent } from './afterLogin/navbar/navbar.component';
import { EntradaComponent } from './afterLogin/entrada/entrada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";


import { FlexLayoutModule } from '@angular/flex-layout';


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
    RegisterComponent,
    NavbarComponent,
    EntradaComponent
    ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
