import { Component, OnInit } from '@angular/core';
import { Direccion } from 'src/app/models/Direccion.model';
import { DireccionesService } from 'src/app/services/direcciones.service';
declare var $: any;

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  direcciones: Direccion[]

  constructor(private direccionesServicio: DireccionesService) {
    this.direcciones = []
  }

  ngOnInit() {
    this.direccionesServicio.obtenerDireccionesPorCliente(Number(localStorage.getItem('idCliente')))
      .then(data => {
        this.direcciones = data
        $(document).ready(function() {
          $('select').formSelect()
        })
      })
      .catch(error => {
        console.error(error)
      })

  }

}
