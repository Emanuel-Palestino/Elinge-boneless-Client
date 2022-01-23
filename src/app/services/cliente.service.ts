import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrarCliente(cliente: ClienteRegistro , direccion: Direccion){
    //recibir lo ingresado en el formulario 
    //llamado a la api de registrar cliente pasar datos del modelo cliente, regresa datos en JSON
    //agregar a modelo de direccion 
    //enviar api de registrar direccion
  }
}
