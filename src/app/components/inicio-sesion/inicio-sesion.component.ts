import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $('.slider').slider();
    });
          
  }

}
