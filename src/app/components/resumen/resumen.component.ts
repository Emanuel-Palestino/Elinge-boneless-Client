import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { PedidoCompleto } from 'src/app/models/PedidoCompleto.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  cliente: Cliente
  pedidos: PedidoCompleto[]
  indexInformacion: number

  constructor(private clienteService: ClienteService, private pedidosService: PedidosService) {
    this.cliente = new Cliente()
    this.pedidos = []
    this.indexInformacion = -1
  }

  ngOnInit(): void {
    let id = localStorage.getItem('idCliente')
    this.clienteService.obtenerInformacion(Number(id))
      .then(res => {
        this.cliente = res
      })
      .catch(err => {
        console.error(err)
      })
    
    // Obtener infomacion de los pedidos
    this.pedidosService.obtenerInformacionPedidosPorCliente(Number(id))
      .then((res: PedidoCompleto[]) => {
        this.pedidos = res
      })
      .catch(err => {
        console.error(err)
      })
  }

  actualizarIndex(i: number): void {
    this.indexInformacion = i
  }

}
