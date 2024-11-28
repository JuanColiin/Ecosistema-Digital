import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { EmprendimientoDetalleComponent } from './emprendimiento-detalle/emprendimiento-detalle.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'emprendimientos', component: EmprendimientosComponent },
  { path: 'emprendimientos/:id', component: EmprendimientoDetalleComponent }, // Ruta para detalles
  { path: '**', redirectTo: 'emprendimientos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
