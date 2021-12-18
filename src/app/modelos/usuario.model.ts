export class Usuario {
    _id?: number;
    nombre: string;
    correo: string;
    contrasena: string;
    permiso: string;

    constructor(nombre:string,correo:string,contrasena:string, permiso:string){
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
        this.permiso = permiso;
    }
}