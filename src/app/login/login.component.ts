import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // Inicializando loginForm con FormBuilder
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no hacer nada
    }

    // Aquí es donde se realizaría la llamada al servicio de login
    const formData = this.loginForm.value;
    console.log('Datos de login:', formData);
    this.authService.login(formData).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // Redirigir o manejar el login exitoso
      },
      error: (error) => {
        console.error('Error en el login:', error);
      }
    });
  }
}
