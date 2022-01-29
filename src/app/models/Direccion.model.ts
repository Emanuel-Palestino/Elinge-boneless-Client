export class Direccion {
	idDireccion: number
    idCliente: number
    colonia: string
    calle: string
    numeroExterior: string
    numeroInterior: string
    referencia: string

    constructor() {
		this.idDireccion = 0
        this.idCliente = 0
        this.colonia = ''
        this.calle = ''
        this.numeroExterior = ''
        this.numeroInterior = ''
        this.referencia = ''
    }
}