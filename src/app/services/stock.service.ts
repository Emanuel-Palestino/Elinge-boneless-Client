import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Stock } from '../models/Stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  async obtenerStock(): Promise<Stock> {
    let resultado: Stock
    await this.http.get(`${environment.API_URI}/stock`).toPromise()
      .then((res: any) => {
        resultado = res[0]
      })
      .catch(err => {
        console.error(err)
      })

    return new Promise<Stock>((resolve, reject) => {
      return resolve(resultado)
    })
  }

  async actualizarStock(nuevo: Stock): Promise<boolean> {
    await this.http.put(`${environment.API_URI}/stock/actualizar`, nuevo).toPromise()
      .then(res => {

      })
      .catch(err => {
        console.error(err)
      })

      return new Promise<boolean> ((resolve, reject) => {
        return resolve(true)
      })
  }


}
