import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Response } from "../models/response";
import { Usuario } from "../models/usuario";
import { Login } from "../models/login";


const httpOption={
 Headers: new HttpHeaders({
     'Contend-Type': 'application/json'
 })
};


@Injectable({
    providedIn: 'root'
})

export class ApiauthService{
    url: string='https://localhost:44354/api/User/login';

    private usuarioSubject: BehaviorSubject<Usuario>;

    public get usuarioData(): Usuario{
        return this.usuarioSubject.value;
    }


    constructor(private _http: HttpClient){
        this.usuarioSubject =new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem("usuario")!)) ;   
    }


 //Uso de Interceptors y localStorage   

    //peticion de inicio por medio de API que de ser verdadero devuelve el token de permiso
    login(login: Login): Observable<Response> {
        
        //return this._http.post<Response>(this.url,{email,password},httpOption);
        return this._http.post<Response>(this.url,login,).pipe(
            map(res => {
                //guarda la sesion si es exitoso
                if(res.exito === 1 ){
                    const user: Usuario = res.data;
                    localStorage.setItem('usuario',JSON.stringify(user));
                    this.usuarioSubject.next(user);
                }
                return res;
            })
        );
    }



    logout(){
        //cuando sale de la sesion, elimina del registro de token de la sesion
        localStorage.removeItem('usuario');
        this.usuarioSubject.next( null!);
    }


}