export class DireccionNueva {
    idCliente: number;
    colonia: string;
    calle: string;
    numeroExterior: string;
    numeroInterior: string;
    referencia: string;

    constructor() {
        this.idCliente = 0;
        this.colonia = '';
        this.calle = '';
        this.numeroExterior = '';
        this.numeroInterior = '';
        this.referencia = '';
    }
}