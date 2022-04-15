import { Component, Inject } from "@angular/core";
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Cliente } from "src/app/models/cliente";
import { ApiclienteService } from "src/app/services/apicliente.service";

@Component({
    templateUrl: 'dialogcliente.component.html'
})

export class DialoClienteComponent{

    public nombre: string = "" ;

    constructor(
        public dialogRef: MatDialogRef<DialoClienteComponent>,
        public apiCliente: ApiclienteService,
        public snackBar: MatSnackBar,

        //Devuelve los valores seleccionados
        @Inject(MAT_DIALOG_DATA) public cliente:Cliente
        ){ 
            if(this.cliente !== null){
                this.nombre = cliente.nombre;
            }

        }

        close(){
            this.dialogRef.close();
        }

        addCliente(){
            const cliente: Cliente = { nombre: this.nombre,id:0 };
           this.apiCliente.agregar(cliente).subscribe(Response => {
               if (Response.exito ==1 ){
                   this.dialogRef.close();
                   //El segundo atributo de Open() es la accion
                   this.snackBar.open('cliente insertado con exito','',{
                       //dos segundos
                       duration: 2000
                   });
               }
           }); 
        }

        editCliente(){
            const cliente: Cliente = { nombre: this.nombre,id:this.cliente.id };
            this.apiCliente.editar(cliente).subscribe(Response => {
                if (Response.exito ==1 ){
                    this.dialogRef.close();
                    //El segundo atributo de Open() es la accion
                    this.snackBar.open('cliente Editado con exito','',{
                        //dos segundos
                        duration: 2000
                    });
                }
            }); 
        }

}