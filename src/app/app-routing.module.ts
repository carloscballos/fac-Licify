import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ListaFacturasComponent } from './componentes/lista-facturas/lista-facturas.component';

const routes: Routes = [
  {path: '',component: InicioSesionComponent},
  {path: 'home',component: ListaFacturasComponent},
  {path: 'crear-factura', component: FacturasComponent},
  {path: 'editar-facura/id',component: FacturasComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
