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
  pedidosNoFinalizados: PedidoCompleto[]
  pedidosFinalizados: PedidoCompleto[]
  indexInformacionFinalizados: number
  indexInformacionNoFinalizados: number

  constructor(private router: Router, private pedidosService: PedidosService) {
    this.pedidosNoFinalizados = []
    this.pedidosFinalizados = []
    this.indexInformacionFinalizados = -1
    this.indexInformacionNoFinalizados = -1
  }

  ngOnInit(): void {
    if (localStorage.getItem('administrador') == null)
      this.router.navigateByUrl('administracion/ingresar')
    $(document).ready(function () {
      $('.collapsible').collapsible()
      $('.modal').modal()
    });

    let id = localStorage.getItem('idCliente')
    // Obtener información de los pedidos pendientes
    this.pedidosService.obtenerInformacionPedidosNoFinalizados()
      .then((res: PedidoCompleto[]) => {
        this.pedidosNoFinalizados = res
      })
      .catch(err => {
        console.error(err)
      })

    // Obtener información de los pedidos finalizados
    this.pedidosService.obtenerInformacionPedidosFinalizados()
      .then((res: PedidoCompleto[]) => {
        this.pedidosFinalizados = res
      })
      .catch(err => {
        console.error(err)
      })

  }

  actualizarIndexFinalizados(i: number): void {
    this.indexInformacionFinalizados = i
  }

  actualizarIndexNoFinalizados(i: number): void {
    this.indexInformacionNoFinalizados = i
  }

  finalizarPedido(idPedido: number, index: number): void {
    // Actualizar la base de datos
    this.pedidosService.marcarFinalizado(idPedido)
      .then(res => {
        // Eliminar el pedido de los no finalizados y agregarlos a los finalizados
        this.pedidosFinalizados.unshift(this.pedidosNoFinalizados.splice(index, 1)[0])
      })
      .catch(err => {
        console.error(err)
      })
  }

}
