import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { ApiauthService } from "../services/apiauth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    constructor(private apiauthService: ApiauthService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiauthService.usuarioData;
        if(usuario){
           req = req.clone({
               setHeaders:{
                        Authorization: `Bearer ${usuario.token}`
               }
           });
        }
            return next.handle(req);
    }
}