export class Pedido {
    idCliente: number
    telefonoExtra: number
    total: number
    dineroRecibido: number
    notas: string
    idDireccion: number
    finalizado: number
    constructor() {
        this.idCliente = 0
        this.telefonoExtra = 0
        this.dineroRecibido = 0
        this.total = 0
        this.notas = ''
        this.idDireccion = 0
        this.finalizado = 0
    }
}