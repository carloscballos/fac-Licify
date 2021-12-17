import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaFacturasComponent } from './componentes/lista-facturas/lista-facturas.component';
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { DataTablesModule } from "angular-datatables";



@NgModule({
  declarations: [
    AppComponent,
    ListaFacturasComponent,
    FacturasComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
