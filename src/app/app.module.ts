import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EmprendimientosComponent } from './emprendimientos/emprendimientos.component';
import { EmprendimientoDetalleComponent } from './emprendimiento-detalle/emprendimiento-detalle.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    LoginComponent,
    EmprendimientosComponent,
    EmprendimientoDetalleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // forrmularios tipo plantilla
    HttpClientModule // Para hacer peticiones Http a la API
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
