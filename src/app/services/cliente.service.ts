import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ClienteRegistro } from '../models/ClienteRegistro.model';
import { Direccion } from '../models/Direccion.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
   }

  registrarCliente(cliente: ClienteRegistro , direccion: Direccion){
    //recibir lo ingresado en el formulario sale de 
    //llamado a la api de registrar cliente pasar datos del modelo cliente, regresa datos en JSON
    //agregar a modelo de direccion 
    //enviar api de registrar direccion


    //recibir modelos de registroUsuario y Direccion
    //llamado a la Api "ingresarCliente" inserccion de los datos de Registro
    //pasar los datos de respuesta en el JSON
    //A partir de ID, enviar a API ingresarDireccion 

    

  }
}
