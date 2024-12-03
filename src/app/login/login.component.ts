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
  message: string = ''; // Para mostrar mensajes de éxito o error

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    // Inicializando el formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.message = 'Por favor, completa el formulario correctamente.';
      return;
    }

    const formData = this.loginForm.value;

    this.authService.login(formData).subscribe({
      next: (response) => {
        this.message = `Inicio de sesión exitoso. Bienvenido, ${response.name}`;
      },
      error: (error) => {
        if (error.status === 401) {
          this.message = 'Error al iniciar sesión. Verifique sus credenciales.';
        } else {
          this.message = 'Error al conectar con el servidor. Inténtalo nuevamente.';
        }
      },
    });
  }
}
