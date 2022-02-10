import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { DireccionNueva } from '../models/DireccionNueva.model';
import { ClienteNuevo } from '../models/ClienteNuevo.model';
import { Cliente } from '../models/Cliente.model';
import { ClienteLogin } from '../models/ClienteLogin.model';
import { ContenidoPedido } from '../models/ContenidoPedido.model.ts';
import { Pedido } from '../models/Pedido.model';
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) {
  }

  //recibir modelos de registroUsuario y Direccion 
  async registrarCliente(cliente: ClienteRegistro, direccion: DireccionNueva): Promise<string> {
    let clienteNuevo = new ClienteNuevo(cliente)

    await this.http.post(`${environment.API_URI}/clientes/crear`, clienteNuevo).toPromise()
      .then(async (data: any) => {
        direccion.idCliente = data.insertId;

        return await this.http.post(`${environment.API_URI}/direcciones/crear`, direccion).toPromise();
      })
      .then(res => {
        // Usuario Registrado Completamente
        console.log("Registro Completo")
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<string>((resolve, reject) => {
      return resolve(direccion.idCliente.toString())
    })
  }

  //Hacer Pedido
  async realizarPedido(idCliente:number,pedidoCont: ContenidoPedido,pedido:Pedido): Promise<ContenidoPedido> {
    pedido.idCliente=idCliente;
    await this.http.post(`${environment.API_URI}/realizarPedido`,pedido, pedidoCont).toPromise()
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
  
  async obtenerInformacion(id: Number): Promise<Cliente> {
    let cliente: Cliente = new Cliente()

    await this.http.get(`${environment.API_URI}/clientes/${id}`).toPromise()
      .then(async (data: any) => {
        cliente = data
        console.log("Obtención completa")
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<Cliente>((resolve, reject) => {
      return resolve(cliente)
    })
  }

  async iniciarSesionCliente(clienteLogeo: ClienteLogin) {
    var id: string

    await this.http.get(`${environment.API_URI}/clientes/${clienteLogeo.correo}/${clienteLogeo.password}`).toPromise()
      .then(async (data: any) => {
        id = data
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<string>((resolve, reject) => {
      return resolve(id)
    })
  }

}
