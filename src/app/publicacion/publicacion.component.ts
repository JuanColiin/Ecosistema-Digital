import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PublicacionService } from '../services/publicacion.service';
import { Categoria } from '../models/categoria.enum';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  publicacionForm: FormGroup;
  categorias = Object.values(Categoria); // Mapeamos el enum para mostrarlo en el formulario

  constructor(private fb: FormBuilder, private publicacionService: PublicacionService) {
    // Inicializamos el formulario en el constructor
    this.publicacionForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: [null],
      foto: ['', Validators.required],
      ciudad: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Aquí no es necesario inicializar de nuevo, ya que lo hacemos en el constructor
  }

  onSubmit(): void {
    if (this.publicacionForm.valid) {
      this.publicacionService.createPublicacion(this.publicacionForm.value).subscribe(
        response => {
          console.log('Publicación creada', response);
        },
        error => {
          console.error('Error al crear publicación', error);
        }
      );
    }
  }
}
