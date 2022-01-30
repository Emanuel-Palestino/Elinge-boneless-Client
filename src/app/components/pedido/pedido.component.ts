import { Component, OnInit } from '@angular/core';
var $: any;

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
    $('select').formSelect();
    });

  }

}
