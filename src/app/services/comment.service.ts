// comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';  // Esto sirve para devolver un valor por defecto en caso de error

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/comment';  // Aquí iría la URL del backend

  constructor(private http: HttpClient) { }

  // Método para obtener los comentarios
  getComments() {
    return this.http.get<any[]>(`${this.apiUrl}`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener los comentarios', error);
          return of([  // Datos ficticios en caso de error
            { id: 1, text: '¡Gran trabajo en este proyecto!', author: { name: 'Juan Perez' } },
            { id: 2, text: 'Me encanta, ¡mucho éxito!', author: { name: 'Ana González' } }
          ]);
        })
      );
  }

  // Método para crear un comentario
  createComment(comment: any) {
    return this.http.post(`${this.apiUrl}/create`, comment)
      .pipe(
        catchError(error => {
          console.error('Error al crear el comentario', error);
          return of(null);  // Retorna null en caso de error
        })
      );
  }

  // Método para borrar un comentario
  deleteComment(commentId: number) {
    return this.http.delete(`${this.apiUrl}/delete/${commentId}`)
      .pipe(
        catchError(error => {
          console.error('Error al borrar el comentario', error);
          return of(null);  // Retorna null en caso de error
        })
      );
  }
}
