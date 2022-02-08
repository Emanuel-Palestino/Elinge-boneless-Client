export class Pedido {
    idPedido: number
    idCliente: number
    telefonoExtra: number
    total: number
    notas: string
    fecha: string
    finalizado: number
    constructor() {
        this.idPedido = 0
        this.idCliente = 0
        this.telefonoExtra = 0
        this.total = 0
        this.notas = ''
        this.fecha = ''
        this.finalizado = 0
    }
}