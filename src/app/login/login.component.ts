import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Aquí iría la lógica de inicio de sesión
    console.log('Inicio de sesión', this.email, this.password);
  }
}
