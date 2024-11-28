import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  role: 'emprendedor' | 'empresario' = 'emprendedor';

  onSubmit() {
    // Aquí iría la lógica de registro
    console.log('Registro', this.name, this.email, this.password, this.role);
  }
}
