import { Component, OnInit } from '@angular/core';
import { DireccionesService } from '../../services/direcciones.service';
import { DireccionNueva } from '../../models/DireccionNueva.model';

@Component({
  selector: 'app-direcciones-agregar',
  templateUrl: './direcciones-agregar.component.html',
  styleUrls: ['./direcciones-agregar.component.css']
})
export class DireccionesAgregarComponent implements OnInit
{
  direccionNueva:DireccionNueva;
  constructor(private direccionesServicie:DireccionesService) 
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
      console.log("Direccion Agregada")
    }, err => console.error(err) );
  }

}
