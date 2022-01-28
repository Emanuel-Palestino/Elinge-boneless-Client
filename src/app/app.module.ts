import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { BarraNavegacionClientesComponent } from './components/barra-navegacion-clientes/barra-navegacion-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioSesionComponent,
    RegistroComponent,
    PrincipalComponent,
    PieDePaginaComponent,
    ClientesComponent,
    ResumenComponent,
    BarraNavegacionClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
