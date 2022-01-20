import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

const routes: Routes = [
  {
    path: "navegacion",
    component: BarraNavegacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
