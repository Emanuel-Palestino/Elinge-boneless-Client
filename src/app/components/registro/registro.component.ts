import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteRegistro } from 'src/app/models/ClienteRegistro.model';
import { Direccion } from 'src/app/models/Direccion.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cliente: ClienteRegistro;
  direccion: Direccion;

  constructor(private servicioCliente: ClienteService) {
    this.cliente = new ClienteRegistro();
    this.direccion = new Direccion();
   }

  ngOnInit(): void {
  }

  registrarse(): void{
    this.servicioCliente.registrarCliente(this.cliente,this.direccion)
  }

}
