import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFacturasComponent } from './componentes/lista-facturas/lista-facturas.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { DataTablesModule } from "angular-datatables";
import { Toast, ToastrModule } from 'ngx-toastr';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { HomeComponent } from './componentes/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaFacturasComponent,
    FacturasComponent,
    InicioSesionComponent,
    ListaUsuariosComponent,
    UsuarioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
