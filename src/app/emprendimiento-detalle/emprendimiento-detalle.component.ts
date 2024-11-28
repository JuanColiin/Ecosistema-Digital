import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emprendimiento-detalle',
  templateUrl: './emprendimiento-detalle.component.html',
  styleUrls: ['./emprendimiento-detalle.component.css']
})
export class EmprendimientoDetalleComponent {
  @Input() emprendimiento: any = null;
  @Output() onVolver = new EventEmitter<void>();

  volver(): void {
    this.onVolver.emit();
  }
}
