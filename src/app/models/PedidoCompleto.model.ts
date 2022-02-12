export class PedidoCompleto {
	idPedido: number
	idCliente: number
	telefonoExtra: string
	total: number
	dineroRecibido: number
	notas: string
	fecha: string
	idDireccion: number
	finalizado: number
	colonia: string
	calle: string
	numeroExterior: number
	numeroInterior: number
	referencia: string
	idOrden: number
	subtotal: number
	cantidadBoneless: number
	cantidadPapas: number
	mangoHabanero: number
	bbq: number
	bufalo: number
	piñaHabanero: number
	papasEspeciales: number

	constructor() {
		this.idPedido = 0
		this.idCliente = 0
		this.telefonoExtra = ''
		this.total = 0
		this.dineroRecibido = 0
		this.notas = ''
		this.fecha = ''
		this.idDireccion = 0
		this.finalizado = 0
		this.colonia = ''
		this.calle = ''
		this.numeroExterior = 0
		this.numeroInterior = 0
		this.referencia = ''
		this.idOrden = 0
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