import { Component, OnInit } from "@angular/core";
import { ApiauthService } from "../services/apiauth.service";
import { Router } from "@angular/router";
import { FormGroup,FormControl ,FormBuilder, Validators} from "@angular/forms";



//OnInit solicita una identificacion para ingresar al componente
@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{

//SOLUCIONA EL ERROR DE LA DECLARACION DE VARIABLES 
//"strictPropertyInitialization": false en tsconfig.json
  
    
//Formulario reactivo
        public loginForm = this.fb.group({
            email: ['',Validators.required],
            password: ['',Validators.required]
        });    

/*public loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });*/

    constructor(public apiauth:ApiauthService ,  private router: Router, private fb: FormBuilder ){
      
      /*  if(this.apiauth.usuarioData){
            this.router.navigate(['/']);
        }*/

    }



    ngOnInit()  {
        
    }

    login(){
        this.apiauth.login(this.loginForm.value).subscribe(Response =>{
           
            if(Response.exito ===1 ){
                this.router.navigate(['/']);
            }

           
        });
    }


}