import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturaForm: FormGroup;

  constructor(private fb: FormBuilder) { 
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
      pagada: ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarFactura(){
    console.log(this.facturaForm)
  }

}
