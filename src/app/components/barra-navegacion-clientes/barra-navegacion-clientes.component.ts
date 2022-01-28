import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any

@Component({
  selector: 'app-barra-navegacion-clientes',
  templateUrl: './barra-navegacion-clientes.component.html',
  styleUrls: ['./barra-navegacion-clientes.component.css']
})
export class BarraNavegacionClientesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('idCliente') == null)
      this.router.navigateByUrl('ingresar')

    $(document).ready(function () 
    {
      $('.sidenav').sidenav();
    });
  }

}
