import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router,private toastr: ToastrService,
              private _usuarioServices: UsuarioService ) {
    this.usuarioForm = fb.group({
      nombre: ['',Validators.required],
      correo: ['',[Validators.required,Validators.email]],
      contrasena: ['', Validators.required],
      permiso: ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      contrasena: this.usuarioForm.get('contrasena')?.value,
      permiso: this.usuarioForm.get('permiso')?.value,
    }
    console.log(USUARIO);
      this._usuarioServices.guardarUsuarios(USUARIO).subscribe(data =>{
      this.toastr.success('Usuario registrado con exito','Usuario Registrado');
      this.router.navigate(['/usuarios']);
    })    
  }

}
