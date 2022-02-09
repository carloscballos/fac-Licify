import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Factura } from 'src/app/modelos/factura.model';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})
export class ListaFacturasComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  listFacturas: Factura[] = [];

  constructor(private _facturaService: FacturaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.obtenerFacturas();
  }

  obtenerFacturas() {
    this._facturaService.getFacturas().subscribe(data =>{
      this.listFacturas = data
    }, error => {
      console.log(error)
    })
  }

  eliminarFactura(id: any) {
    this._facturaService.eliminarFactura(id).subscribe(data => {
      this.toastr.error('La factura fue eliminada con exito','Factura eliminada')
      this.obtenerFacturas();
    }, error => {
      console.log('error');
    })
  }
}