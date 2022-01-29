import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClienteLogin } from '../models/ClienteLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor(private http: HttpClient) {
  }

  async iniciarSesionAdministrador(administradorLogeo: ClienteLogin){
    
    let confirmacion: string;

    await this.http.get(`${environment.API_URI}/administracion/validar/${administradorLogeo.correo}/${administradorLogeo.password}`).toPromise()
      .then(async (data:any) => {
        confirmacion = data;
      })
      .catch(error => {
        console.error(error);
      });
    
      return new Promise<string>((resolve,reject) => {
        return resolve(confirmacion);
      })
    
  }
}
