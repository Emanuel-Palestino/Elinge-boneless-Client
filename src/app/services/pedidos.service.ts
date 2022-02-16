import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContenidoPedido } from '../models/ContenidoPedido.model';
import { Pedido } from '../models/Pedido.model';
import { PedidoCompleto } from '../models/PedidoCompleto.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  //Hacer Pedido
  async realizarPedido(idCliente: number, pedidoCont: ContenidoPedido, pedido: Pedido): Promise<void> {
    pedido.idCliente = idCliente
    let pedidoRealizado = {
      pedido: pedido,
      contenido_pedido: pedidoCont
    }

    await this.http.post(`${environment.API_URI}/realizarPedido`, pedidoRealizado).toPromise()
      .then(res => {
        console.log("Pedido Realizado")
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<void>((resolve, reject) => {
      return resolve()
    })
  }

  async obtenerInformacionPedidosPorCliente(idCliente: number): Promise<PedidoCompleto[]> {

    let contenido: PedidoCompleto[]
    await this.http.get(`${environment.API_URI}/pedidos/cliente/pedidosCompletos/${idCliente}`).toPromise()
      .then((res: any) => {
        contenido = res
        console.log("Obtención de Pedidos Completa", res)
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<PedidoCompleto[]>((resolve, reject) => {
      return resolve(contenido)
    })
  }

  async obtenerInformacionPedidosNoFinalizados(): Promise<PedidoCompleto[]> {

    let contenido: PedidoCompleto[]
    await this.http.get(`${environment.API_URI}/pedidos/pedidosCompletos/noFinalizados`).toPromise()
      .then((res: any) => {
        contenido = res
        console.log("Obtención de Pedidos No Finalizados Completa", res)
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<PedidoCompleto[]>((resolve, reject) => {
      return resolve(contenido)
    })
  }

  async obtenerInformacionPedidosFinalizados(): Promise<PedidoCompleto[]> {

    let contenido: PedidoCompleto[]
    await this.http.get(`${environment.API_URI}/pedidos/pedidosCompletos/finalizados`).toPromise()
      .then((res: any) => {
        contenido = res
        console.log("Obtención de Pedidos Finalizados Completa", res)
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<PedidoCompleto[]>((resolve, reject) => {
      return resolve(contenido)
    })
  }

  async marcarFinalizado(idPedido: number): Promise<boolean> {
    await this.http.get(`${environment.API_URI}/pedidos/finalizarPedido/${idPedido}`).toPromise()
    .then(res => {
      console.log('Pedido finalizado Correctamente')
    })
    .catch(err => {
      console.error(err)
    })

    return new Promise<boolean>((resolve, reject) => {
      return resolve(true)
    })
  }

}
