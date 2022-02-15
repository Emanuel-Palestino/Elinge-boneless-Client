export class ContenidoPedido {
    subtotal: number
    cantidadBoneless: number
    cantidadPapas: number
    mangoHabanero: number
    bbq: number
    bufalo: number
    piñaHabanero: number
    papasEspeciales: number
    papasSencillas: number

    constructor() {
        this.subtotal = 0
        this.cantidadBoneless = 0
        this.cantidadPapas = 0
        this.mangoHabanero = 0
        this.bbq = 0
        this.bufalo = 0
        this.piñaHabanero = 0
        this.papasEspeciales = 0
        this.papasSencillas = 0
    }

    corregirTipos(): void {
        this.cantidadBoneless = Number(this.cantidadBoneless)
        this.cantidadPapas = Number(this.cantidadPapas)
        this.mangoHabanero = this.mangoHabanero ? 1 : 0
        this.bbq = this.bbq ? 1 : 0
        this.bufalo = this.bufalo ? 1 : 0
        this.piñaHabanero = this.piñaHabanero ? 1 : 0
        this.papasEspeciales = this.papasEspeciales ? 1 : 0
        this.papasSencillas = this.papasSencillas ? 1 : 0
    }
}