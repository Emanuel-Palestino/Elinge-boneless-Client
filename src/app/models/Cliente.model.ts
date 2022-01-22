export class Cliente{
    idCliente: number;
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    contraseña: string;
    sexo: string;

    constructor()
    {
        this.idCliente=0;
        this.nombre='';
        this.apellidos='';
        this.telefono='';
        this.correo='';
        this.contraseña='';
        this.sexo='';
    }
}
