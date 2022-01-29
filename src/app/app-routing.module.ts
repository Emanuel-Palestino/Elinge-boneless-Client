import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioSesionAdministradorComponent } from './components/inicio-sesion-administrador/inicio-sesion-administrador.component';
import { DireccionesAgregarComponent } from './components/direcciones-agregar/direcciones-agregar.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
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
    path: "administracion",
    component: AdministracionComponent
  },
  {
    path: "administracion/ingresar",
    component: InicioSesionAdministradorComponent
  },
  {
    path: "app",
    component: ClientesComponent,
    children: [
      {
        path: "resumen",
        component: ResumenComponent
      },
      {
        path: "direcciones",
        component: DireccionesComponent
      },
      {
        path: "direcciones/agregar",
        component: DireccionesAgregarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
