import { ClienteRegistro } from "./ClienteRegistro.model"

export class ClienteNuevo {
    nombre: string
    apellidos: string
    telefono: string
    correo: string
    contraseña: string
    sexo: string

    constructor(cliente: ClienteRegistro) {
        this.nombre = cliente.nombre
        this.apellidos = cliente.apellidos
        this.telefono = cliente.telefono
        this.correo = cliente.correo
        this.contraseña = cliente.password
        this.sexo = cliente.sexo
    }
}