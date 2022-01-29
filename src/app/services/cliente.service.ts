import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { Direccion } from '../models/Direccion.model';
import { ClienteNuevo } from '../models/ClienteNuevo.model';
import { ClienteLogin } from '../models/ClienteLogin.model';

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

  
  async iniciarSesionCliente(clienteLogeo: ClienteLogin){

    var id: string

    await this.http.get(`${environment.API_URI}/clientes/${clienteLogeo.correo}/${clienteLogeo.password}`).toPromise()
    .then(async(data: any)=>{
      id=data
    })
    .catch(error=>{
      console.error(error)
    })

    return new Promise<string>((resolve, reject)=>{
      return resolve(id)
    })
  }

}
