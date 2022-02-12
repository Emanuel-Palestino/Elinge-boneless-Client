import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContenidoPedido } from '../models/ContenidoPedido.model';
import { Pedido } from '../models/Pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  //Hacer Pedido
  async realizarPedido(idCliente: number, pedidoCont: ContenidoPedido, pedido: Pedido): Promise<void> {
    pedido.idCliente = idCliente;
    let pedidoRealizado = Object.assign(pedido, pedidoCont);
    await this.http.post(`${environment.API_URI}/realizarPedido`, pedidoRealizado,).toPromise()
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

  async obtenerInformacionPedidosPorCliente(idCliente: number): Promise<any> {

    let contenido: any
    await this.http.get(`${environment.API_URI}/pedidos/cliente/pedidosCompletos/${idCliente}`).toPromise()
    .then(res => {
      contenido = res
      console.log("Obtención de Pedidos Completa")
    })
    .catch(error => {
      console.error(error)
    })

    return new Promise<any>((resolve, reject) => {
      return resolve(contenido)
    })
  }

}
