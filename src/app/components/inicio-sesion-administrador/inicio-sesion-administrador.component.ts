import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteLogin } from 'src/app/models/ClienteLogin.model';
import { AdministracionService } from 'src/app/services/administracion.service'

@Component({
  selector: 'app-inicio-sesion-administrador',
  templateUrl: './inicio-sesion-administrador.component.html',
  styleUrls: ['./inicio-sesion-administrador.component.css']
})
export class InicioSesionAdministradorComponent implements OnInit {

  logearAdministrador: ClienteLogin;

  constructor(private servicioAdminLogeo: AdministracionService, private router: Router) { 
    this.logearAdministrador = new ClienteLogin(); 
  }

  ngOnInit(): void {
    
  }

  iniciarSesionAdmi(): void{
    this.servicioAdminLogeo.iniciarSesionAdministrador(this.logearAdministrador)
    .then( confirmacion => {
      let confirmacionN = Boolean(confirmacion);
      if(confirmacionN != false){
        localStorage.setItem('administrador',confirmacion);
        this.router.navigateByUrl('administracion');
      }
      else{
        alert('Datos incorrectos');
      }
    })
  }

}
