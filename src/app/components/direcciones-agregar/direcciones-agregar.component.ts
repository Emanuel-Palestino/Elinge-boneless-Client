import { Component, OnInit } from '@angular/core';
import { DireccionesService } from '../../services/direcciones.service';
import { DireccionNueva } from '../../models/DireccionNueva.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direcciones-agregar',
  templateUrl: './direcciones-agregar.component.html',
  styleUrls: ['./direcciones-agregar.component.css']
})
export class DireccionesAgregarComponent implements OnInit
{
  direccionNueva:DireccionNueva;
  constructor(private direccionesServicie:DireccionesService,private router: Router) 
  {
    this.direccionNueva=new DireccionNueva();
  }
  ngOnInit(): void 
  {}
  //Metodo nuevo 
  agregarDireccion():void
  {
    console.log("Entrando para agregar una direccion nueva")
    let idCliente = localStorage.getItem('idCliente');
    this.direccionesServicie.crearNuevaDireccion(Number(idCliente),this.direccionNueva).then(res => { 
      this.router.navigateByUrl('app/direcciones')
    }, err => console.error(err) );
  }

}
