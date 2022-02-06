import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion-administracion',
  templateUrl: './barra-navegacion-administracion.component.html',
  styleUrls: ['./barra-navegacion-administracion.component.css']
})
export class BarraNavegacionAdministracionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salir(): void {
    localStorage.removeItem('administrador')
    this.router.navigateByUrl('/')
  }

}
