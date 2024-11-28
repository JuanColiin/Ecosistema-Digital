import { Component, OnInit } from '@angular/core';
import emprendimientosData from '../../emprendimientos.json';

@Component({
  selector: 'app-emprendimientos',
  templateUrl: './emprendimientos.component.html',
  styleUrls: ['./emprendimientos.component.css']
})
export class EmprendimientosComponent implements OnInit {
  emprendimientos: any[] = [];
  emprendimientoSeleccionado: any = null;

  constructor() {}

  ngOnInit(): void {
    this.emprendimientos = emprendimientosData;
  }

  verMas(emprendimiento: any): void {
    this.emprendimientoSeleccionado = emprendimiento;
  }

  cerrarDetalle(): void {
    this.emprendimientoSeleccionado = null;
  }
}
