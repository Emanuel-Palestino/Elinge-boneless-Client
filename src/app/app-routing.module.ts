import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
  {
    path: "navegacion",
    component: BarraNavegacionComponent
  },
  {
    path: "inicio-sesion",
    component: InicioSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
