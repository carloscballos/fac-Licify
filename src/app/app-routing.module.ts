import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { FacturasComponent } from './componentes/facturas/facturas.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ListaFacturasComponent } from './componentes/lista-facturas/lista-facturas.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  {path: '',component: InicioSesionComponent},
  {path: 'home',component: HomeComponent},
  {path: 'facturas',component: ListaFacturasComponent},
  {path: 'crear-factura', component: FacturasComponent},
  {path: 'editar-factura/:id',component: FacturasComponent},
  {path: 'usuarios', component: ListaUsuariosComponent},
  {path: 'crear-usuario', component: UsuarioComponent},
  {path: "editar-usuario/:id", component: UsuarioComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
