export class ContenidoPedido {
    idOrden: number
    idPedido: number
    subtotal: number
    cantidadBoneless: number
    cantidadPapas: number
    mangoHabanero: number
    bbq: number
    bufalo: number
    piñaHabanero: number
    papasEspeciales: number

    constructor() {
        this.idOrden = 0
        this.idPedido = 0
        this.subtotal = 0
        this.cantidadBoneless = 0
        this.cantidadPapas = 0
        this.mangoHabanero = 0
        this.bbq = 0
        this.bufalo = 0
        this.piñaHabanero = 0
        this.papasEspeciales = 0
    }
}