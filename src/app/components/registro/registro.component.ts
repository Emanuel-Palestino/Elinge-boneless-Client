import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteRegistro } from 'src/app/models/ClienteRegistro.model';
import { DireccionNueva } from 'src/app/models/DireccionNueva.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cliente: ClienteRegistro;
  direccion: DireccionNueva;

  constructor(private servicioCliente: ClienteService, private router: Router) {
    this.cliente = new ClienteRegistro();
    this.direccion = new DireccionNueva();
  }

  ngOnInit(): void {
  }

  registrarse(): void{

    this.servicioCliente.registrarCliente(this.cliente, this.direccion)
      .then(id => {
        console.log(id)
        localStorage.setItem('idCliente', id)
        this.router.navigateByUrl('app/resumen')
      })

  }

}
