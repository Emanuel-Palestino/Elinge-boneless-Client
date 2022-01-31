import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Direccion } from '../models/Direccion.model';
import { DireccionNueva } from '../models/DireccionNueva.model';

@Injectable({
  providedIn: 'root'
})
export class DireccionesService {

  constructor(private http: HttpClient) { }

  async obtenerDireccionesPorCliente(idCliente: number) {
    let direcciones: Direccion[]

    await this.http.get(`${environment.API_URI}/direcciones/cliente/${idCliente}`).toPromise()
      .then((data: any) => {
        direcciones = data
      })
      .catch(error => {
        console.error(error)
      })

    return new Promise<Direccion[]>((resolve, reject) => {
      return resolve(direcciones)
    })
  }
  async crearNuevaDireccion(idCliente:number,direccion:DireccionNueva)
  {
    console.log("Entrando al servicio NuevaDireccion")
    direccion.idCliente=idCliente;
    return this.http.post(`${environment.API_URI}/direcciones/crear`, direccion);
  }

}

