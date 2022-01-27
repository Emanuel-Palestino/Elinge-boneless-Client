import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { Direccion } from '../models/Direccion.model';
import { ClienteNuevo } from '../models/ClienteNuevo.model';
import { Cliente } from '../models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
  }

  //recibir modelos de registroUsuario y Direccion 
  async registrarCliente(cliente: ClienteRegistro, direccion: Direccion): Promise<string> {
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

}
