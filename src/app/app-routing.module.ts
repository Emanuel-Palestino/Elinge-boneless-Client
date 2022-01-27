import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResumenComponent } from './components/resumen/resumen.component';

const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "ingresar",
    component: InicioSesionComponent
  },
  {
    path: "registrarse",
    component: RegistroComponent
  },
  {
    path: "app",
    component: ClientesComponent,
    children: [
      {
        path: "resumen",
        component: ResumenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
