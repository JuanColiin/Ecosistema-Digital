import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroForm } from '../models/registro.model';  // Importa la interfaz

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registroForm!: FormGroup;  // Aseguramos que la propiedad será inicializada
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['']  // Rol opcional
    });
  }

  // Método de acceso a los campos del formulario
  get f() { return this.registroForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.registroForm.invalid) {
      return;
    }

    // Aquí iría la llamada al servicio cuando esté listo
    console.log(this.registroForm.value);
  }
}
