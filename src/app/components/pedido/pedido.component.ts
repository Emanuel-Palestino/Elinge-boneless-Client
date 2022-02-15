import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContenidoPedido } from 'src/app/models/ContenidoPedido.model';
import { Direccion } from 'src/app/models/Direccion.model';
import { Pedido } from 'src/app/models/Pedido.model';
import { DireccionesService } from 'src/app/services/direcciones.service';
import { PedidosService } from 'src/app/services/pedidos.service';
declare var $: any;

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  direcciones: Direccion[]
  pedido: Pedido
  contenidoPedido: ContenidoPedido
  pinaHabanero: Boolean

  constructor(private direccionesServicio: DireccionesService, private pedidosService: PedidosService, private router: Router) {
    this.direcciones = []
    this.pedido = new Pedido()
    this.contenidoPedido = new ContenidoPedido()
    this.pinaHabanero = false
  }

  ngOnInit() {
    this.direccionesServicio.obtenerDireccionesPorCliente(Number(localStorage.getItem('idCliente')))
      .then(data => {
        this.direcciones = data
        $(document).ready(function() {
          $('select').formSelect()
        })
      })
      .catch(error => {
        console.error(error)
      })

  }

  calcularTotal(): void {
    this.pinaHabanero == true ? this.contenidoPedido.piñaHabanero = 1 : 0

    // Obtención de valores
    let precioDeBoneless = this.contenidoPedido.cantidadBoneless * 120
    let cantidadSabores = (this.contenidoPedido.mangoHabanero ? 1 : 0) + (this.contenidoPedido.bbq ? 1 : 0) + (this.contenidoPedido.bufalo ? 1 : 0) + (this.contenidoPedido.piñaHabanero ? 1 : 0)
    let precioExtra = cantidadSabores == 0 ? 0 : (this.contenidoPedido.cantidadBoneless % cantidadSabores) * 10
    let precioPapas = this.contenidoPedido.cantidadPapas * 50

    this.pedido.total = precioDeBoneless + precioExtra + precioPapas
  }

  async finalizarPedido() {
    this.contenidoPedido.corregirTipos()
    this.pedido.corregirTipos()
    this.contenidoPedido.subtotal = this.pedido.total

    await this.pedidosService.realizarPedido(Number(localStorage.getItem('idCliente')), this.contenidoPedido, this.pedido) 
    .then(res => {
      console.log("Pedido Realizado con Exito")
      this.router.navigateByUrl('app/resumen')
    })
    .catch(err => {
      console.error(err)
    })
  }

}
