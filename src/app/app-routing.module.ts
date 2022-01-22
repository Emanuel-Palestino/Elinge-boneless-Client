import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { RegistroComponent } from './components/registro/registro.component';
const routes: Routes = [
  {
    path: "navegacion",
    component: BarraNavegacionComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
