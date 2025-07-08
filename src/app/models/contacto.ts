export class Contacto {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
    terminos: boolean;

    constructor(nombre: string, email: string, telefono: string, mensaje: string, terminos: boolean){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.mensaje = mensaje;
        this.terminos = terminos;
    }
}