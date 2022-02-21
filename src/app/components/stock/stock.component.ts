import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/Stock.model';
import { StockService } from 'src/app/services/stock.service';
declare var $: any

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  stock: Stock

  constructor(private stockService: StockService) {
    this.stock = new Stock()
  }

  ngOnInit(): void {
    // Ocultar elementos
    $('#btnCancelar, #btnGuardar').hide()

    // Obtener la cantidad de stock que existe
    this.stockService.obtenerStock()
      .then(res => {
        this.stock = res
      })
      .catch(err => {
        console.error(err)
      })

  }

  editarStock(): void {
    // Mostrar u ocultar elementos
    $('#btnCancelar, #btnGuardar').show()
    $('#btnEditar').hide()

    $('#kilosPapas, #kilosBoneless').removeAttr('disabled')
  }

  cancelarEdicion(): void {
    // Mostrar u ocultar elementos
    $('#btnCancelar, #btnGuardar').hide()
    $('#btnEditar').show()

    // Deshabilitar inputs
    $('#kilosPapas, #kilosBoneless').attr('disabled', '')
  }

  guardarStock(): void {
    // Actualizar el stock
    this.stockService.actualizarStock(this.stock)
      .then(res => {
        // Mostrar u ocultar elementos
        $('#btnCancelar, #btnGuardar').hide()
        $('#btnEditar').show()

        // Deshabilitar inputs
        $('#kilosPapas, #kilosBoneless').attr('disabled', '')
      })
      .catch(err => {
        console.error(err)
      })
  }

}
