import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClienteLogin } from 'src/app/models/ClienteLogin.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  clienteALoguear: ClienteLogin;

  constructor(private servicioClienteLogueo: ClienteService, private router: Router) {
    this.clienteALoguear = new ClienteLogin();
   }

  ngOnInit(): void {    
  }

  iniciarSesion(): void{
    this.servicioClienteLogueo.iniciarSesionCliente(this.clienteALoguear)
    .then(id=> {
      console.log(id)
      if (Number(id) != -1){
        localStorage.setItem('idCliente',String(id))
        this.router.navigateByUrl('app')
      }        
      else
        console.log('campos incorrectos')
    }
    )
  }

}
