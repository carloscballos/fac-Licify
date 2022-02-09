import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Factura } from 'src/app/modelos/factura.model';
import { FacturaService } from 'src/app/servicios/factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService,
              private _facturaService: FacturaService) { 
    this.facturaForm = fb.group({
      factura: ['',Validators.required],
      producto: ['',Validators.required],
      producto1:[], 
      producto2:[], 
      producto3:[], 
      producto4:[], 
      cantidad: ['',Validators.required],
      cantidad1: [],
      cantidad2: [],
      cantidad3: [],
      cantidad4: [],
      precio: ['',Validators.required],
      precio1: [],
      precio2: [],
      precio3: [],
      precio4: [],
      pagada: ['',Validators.required],
      valorTotal: [],
      ivaTotal:[]
    })
  }

  ngOnInit(): void {
  }

  agregarFactura(){
    const FACTURA: Factura = {
      factura: this.facturaForm.get('factura')?.value,
      producto: this.facturaForm.get('producto')?.value,
      producto1: this.facturaForm.get('producto1')?.value,
      producto2: this.facturaForm.get('producto2')?.value,
      producto3: this.facturaForm.get('producto3')?.value,
      producto4: this.facturaForm.get('producto4')?.value,
      cantidad: this.facturaForm.get('cantidad')?.value,
      cantidad1: this.facturaForm.get('cantidad1')?.value,
      cantidad2: this.facturaForm.get('cantidad2')?.value,
      cantidad3: this.facturaForm.get('cantidad3')?.value,
      cantidad4: this.facturaForm.get('cantidad4')?.value,
      precio: this.facturaForm.get('precio')?.value,
      precio1: this.facturaForm.get('precio1')?.value,
      precio2: this.facturaForm.get('precio2')?.value,
      precio3: this.facturaForm.get('precio3')?.value,
      precio4: this.facturaForm.get('precio4')?.value,
      pagada: this.facturaForm.get('pagada')?.value,
      ivaTotal: this.facturaForm.get('ivaTotal')?.value,
      valorTotal: this.facturaForm.get('valorTotal')?.value,
      iva: this.facturaForm.get('iva')?.value,
      iva1: this.facturaForm.get('iva1')?.value,
      iva2: this.facturaForm.get('iva2')?.value,
      iva3: this.facturaForm.get('iva3')?.value,
      iva4: this.facturaForm.get('iva4')?.value,
    }
    console.log(FACTURA)
    this._facturaService.guardarFactura(FACTURA).subscribe(data =>{
      this.toastr.success('Factura registrada con exito','Factura Registrada');
    this.router.navigate(['/facturas']);
    }, error => {
      console.log(error);
      this.facturaForm.reset();
    })    
  }

}
