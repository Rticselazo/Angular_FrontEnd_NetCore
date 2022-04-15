import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';
import { DialoClienteComponent } from './dialog/dialogcliente.component'
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst: any;
  public columnas: string[] = ['id','nombre','actions'];
  readonly width: string = '300px';

  constructor(
private apiCliente: ApiclienteService,
public dialog: MatDialog,
public snackBar: MatSnackBar
  ) { 
  }

  ngOnInit(): void {
    
    this.getClientes();
  }

  getClientes() {
    this.apiCliente.getClientes().subscribe(response => {
      this.lst = response.data;
    })
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialoClienteComponent,{
      width: this.width
    });
    //Actualiza el listado despues de agregar
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  openEdit(Cliente: Cliente){
    const dialogRef = this.dialog.open(DialoClienteComponent,{
      width: this.width,
      data: Cliente
    });


    //Actualiza el listado despues de agregar
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  delete(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogDeleteComponent,{
      width: this.width,
      
    });
    //Actualiza el listado despues de agregar
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiCliente.delete(cliente.id).subscribe(response => {
          if(response.exito ===1){
            this.snackBar.open('Cliente eliminado con exito','',{
              duration: 2000
            });
            this.getClientes();
          }
        })
      }
    });
  }


  
}
