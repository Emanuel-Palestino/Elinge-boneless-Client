export class Direccion{
    idDireccion: number;
    colonia: string;
    calle: string;
    numeroExterior: number;
    numeroInterior: number;
    referencia: string;
    idCliente:number;

    constructor(){
        this.idDireccion=0;
        this.colonia='';
        this.calle='';
        this.numeroExterior=0;
        this.numeroInterior=0;
        this.referencia='';
        this.idCliente=0;
    }
}