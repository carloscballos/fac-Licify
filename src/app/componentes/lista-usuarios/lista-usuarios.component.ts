import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  listUsuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService, private toastr: ToastrService) { }  

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data =>{
      this.listUsuarios = data
    }, error => {
      console.log(error)
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuarios(id).subscribe(data =>{
      this.toastr.error('El usuario fue eliminado con exito','Usuario Eliminado')
      this.obtenerUsuarios();
    }, error => {
      console.log('error');
    })
  }
}
