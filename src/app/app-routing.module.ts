import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
const routes: Routes = [
  {
    path: "",
    component: PrincipalComponent
  },
  {
    path: "registrarse",
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
