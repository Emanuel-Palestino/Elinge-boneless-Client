import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { Direccion } from '../models/Direccion.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
   }

  //recibir modelos de registroUsuario y Direccion 
  registrarCliente(cliente: ClienteRegistro , direccion: Direccion){

                           
    //llamado a la Api "ingresarCliente" inserccion de los datos de Registro                                 
    var Respuesta = this.http.post(`${environment.API_URI}/realizarPedido`, cliente);


    //asignar a direccion el ID de la peticion anterior
    direccion.idCliente = Respuesta;

    //A partir de ID, enviar a API ingresarDireccion 
    this.http.post(`${environment.API_URI}/direcciones/crear`, direccion);
    

    

  }
}
