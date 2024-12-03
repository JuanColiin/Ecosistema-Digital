import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../services/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private registroService: RegistroService) {}

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['PUSHING']  // Valor predeterminado
    });
  }

  get f() {
    return this.registroForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registroForm.invalid) {
      return;
    }

    this.loading = true;

    const user = {
      name: this.f['nombre'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
      role: this.f['role'].value
    };

    this.registroService.register(user).subscribe({
      next: (response) => {
        alert('¡Cuenta creada exitosamente!');
        this.loading = false;
        this.registroForm.reset();  // Limpia el formulario después de un registro exitoso
        this.submitted = false;
      },
      error: (err) => {
        alert(`Error al crear la cuenta: ${err.error.message || 'Inténtalo de nuevo más tarde.'}`);
        this.loading = false;
      }
    });
  }
}
