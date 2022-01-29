import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-barra-navegacion-clientes',
  templateUrl: './barra-navegacion-clientes.component.html',
  styleUrls: ['./barra-navegacion-clientes.component.css']
})
export class BarraNavegacionClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () 
    {
      $('.sidenav').sidenav();
    });
  }

}
