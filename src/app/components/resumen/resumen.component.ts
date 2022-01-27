import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  cliente: Cliente

  constructor(private clienteService: ClienteService) {
    this.cliente = new Cliente()
  }

  ngOnInit(): void {
    let id = localStorage.getItem('idCliente')
    this.clienteService.obtenerInformacion(Number(id))
      .then(res => {
        this.cliente = res
      })
      .catch(err => {
        console.error(err)
      })
  }

}
