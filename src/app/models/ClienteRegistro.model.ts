export class ClienteRegistro {
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    password: string;
    sexo: string;

    constructor() {
        this.nombre = '';
        this.apellidos = '';
        this.telefono = '';
        this.correo = '';
        this.password = '';
        this.sexo = '';
    }
}