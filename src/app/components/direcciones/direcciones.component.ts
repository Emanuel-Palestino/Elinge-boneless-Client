import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/models/Direccion.model';
import { DireccionesService } from 'src/app/services/direcciones.service';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {
  direcciones: Direccion[]

  constructor(private direccionesServicio: DireccionesService) {
    this.direcciones = []
  }

  ngOnInit(): void {
    this.direccionesServicio.obtenerDireccionesPorCliente(Number(localStorage.getItem('idCliente')))
      .then((data: Direccion[]) => {
        this.direcciones = data
      })
      .catch(error => {
        console.error(error)
      })
  }

}
