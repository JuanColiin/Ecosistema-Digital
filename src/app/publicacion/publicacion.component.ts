import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from '../services/publicacion.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacionForm: FormGroup;
  categorias = ['HEALTH', 'TECH', 'EDUCATION', 'ENVIRONMENT'];
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private publicacionService: PublicacionService) {
    this.publicacionForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: [null, Validators.required],
      foto: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.publicacionForm.valid) {
      const formData = {
        name: this.publicacionForm.value.nombre,
        description: this.publicacionForm.value.descripcion,
        category: this.publicacionForm.value.categoria,
        city: this.publicacionForm.value.ciudad,
        picture: this.publicacionForm.value.foto,
        pushing: { id: 1 } // Asignando un ID de prueba por defecto
      };

      this.publicacionService.createPublicacion(formData).subscribe({
        next: (response) => {
          this.successMessage = `¡Publicación creada exitosamente! Proyecto: ${response.name}`;
          this.errorMessage = null;
          this.publicacionForm.reset();
        },
        error: () => {
          this.errorMessage = 'No se ha podido publicar el proyecto. Inténtalo nuevamente.';
          this.successMessage = null;
        }
      });
    }
  }
}
