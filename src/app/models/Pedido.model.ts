export class Pedido {
    idCliente: number
    telefonoExtra: string
    total: number
    dineroRecibido: number
    notas: string
    idDireccion: number
    finalizado: number

    constructor() {
        this.idCliente = 0
        this.telefonoExtra = ''
        this.dineroRecibido = 0
        this.total = 0
        this.notas = ''
        this.idDireccion = 0
        this.finalizado = 0
    }

    corregirTipos(): void {
        this.idDireccion = Number(this.idDireccion)
    }

}