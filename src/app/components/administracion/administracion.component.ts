import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PedidoCompleto } from 'src/app/models/PedidoCompleto.model'
import { PedidosService } from 'src/app/services/pedidos.service'
declare var $: any

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {
  pedidos: PedidoCompleto[]
  indexInformacion: number

  constructor(private router: Router, private pedidosService: PedidosService) { 
    this.pedidos = []
    this.indexInformacion = -1
  }

  ngOnInit(): void {
    if (localStorage.getItem('administrador') == null)
      this.router.navigateByUrl('administracion/ingresar')
    $(document).ready(function () {
      $('.collapsible').collapsible()
    });

    let id = localStorage.getItem('idCliente')
  }

}
