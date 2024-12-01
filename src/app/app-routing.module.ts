import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { EmprendimientoDetalleComponent } from './emprendimiento-detalle/emprendimiento-detalle.component';
import { PublicacionComponent } from './publicacion/publicacion.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'emprendimientos', component: EmprendimientosComponent },
  { path: 'emprendimientos/:projectId', component: EmprendimientoDetalleComponent }, // Ruta para detalles
  { path: 'publicacion', component: PublicacionComponent }, // Asegúrate de definirla antes de '**'
  { path: '**', redirectTo: 'emprendimientos', pathMatch: 'full' } // Siempre al final
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
