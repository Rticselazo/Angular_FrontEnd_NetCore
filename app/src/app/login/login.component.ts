import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "../services/apiauth.service";



//OnInit solicita una identificacion para ingresar al componente
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{

//SOLUCIONA EL ERROR DE LA DECLARACION DE VARIABLES 
//"strictPropertyInitialization": false en tsconfig.json
  
    public email: string;
    public password: string;
    constructor(public apiauth:ApiauthService){

    }



    ngOnInit()  {
        
    }

    login(){
        this.apiauth.login(this.email,this.password).subscribe(Response =>{
            console.log(Response);
        })
    }


}