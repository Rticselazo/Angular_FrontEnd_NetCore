import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './login/login.component';


//canActivate: [AuthGuard] (AuthGuard.ts)  evita que ingrese a otras direcciones por medio del URL
const routes: Routes = [
  {path: '',redirectTo: '/home', pathMatch:'full',canActivate: [AuthGuard]},
{path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
{path: 'cliente', component: ClienteComponent,canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
