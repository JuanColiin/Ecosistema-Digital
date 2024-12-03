import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = 'http://localhost:8080/comment/project';  // Endpoint de los comentarios

  constructor(private http: HttpClient) {}

  // Obtener comentarios por projectId
  getCommentsByProject(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${projectId}`);
  }

  // Crear un nuevo comentario
  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, comment);
  }

  // Eliminar un comentario
  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${commentId}`);
  }

  // Actualizar un comentario
  updateComment(commentId: number, updatedComment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${commentId}`, updatedComment);
  }
}
