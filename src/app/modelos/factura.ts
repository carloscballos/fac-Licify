export class Factura{
    _id?: number;
    factura: number;
    producto: string;
    producto1: string;
    producto2: string;
    producto3: string;
    producto4: string;
    cantidad: number;
    cantidad1: number;
    cantidad2: number;
    cantidad3: number;
    cantidad4: number;
    precio: number;
    precio1: number;
    precio2: number;
    precio3: number;
    precio4: number;
    iva: number;
    iva1: number;
    iva2: number;
    iva3: number;
    iva4: number;
    valorTotal: number;
    ivaTotal: number;
    pagada: string;
    
    constructor(factura:number,producto:string,producto1:string,producto2:string,producto3:string,
                producto4:string,cantidad:number,cantidad1:number,cantidad2:number,cantidad3:number,
                cantidad4:number,precio:number,precio1:number,precio2:number,precio3:number,precio4:number,
                iva:number,iva1:number,iva2:number,iva3:number,iva4:number,valorTotal:number,ivaTotal:number,
                pagada:string){
        this.factura = factura;
        this.producto = producto;
        this.producto1 = producto1;
        this.producto2 = producto2;
        this.producto3 = producto3;
        this.producto4 = producto4;
        this.cantidad = cantidad;
        this.cantidad1 = cantidad1;
        this.cantidad2 = cantidad2;
        this.cantidad3 = cantidad3;
        this.cantidad4 = cantidad4;
        this.precio = precio;
        this.precio1 = precio1;
        this.precio2 = precio2;
        this.precio3 = precio3;
        this.precio4 = precio4;
        this.iva = iva;
        this.iva1 = iva1;
        this.iva2 = iva2;
        this.iva3 = iva3;
        this.iva4 = iva4;
        this.valorTotal = valorTotal;
        this.ivaTotal = valorTotal
        this.pagada = pagada
    }
}