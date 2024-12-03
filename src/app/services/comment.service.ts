import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8080/comment';  // URL de la API de comentarios

  constructor(private http: HttpClient) { }

  // Obtener comentarios por proyecto
  getCommentsByProjectId(projectId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.baseUrl}/project/${projectId}`);
  }

  // Crear un nuevo comentario
  createComment(comment: IComment): Observable<IComment> {
    return this.http.post<IComment>(`${this.baseUrl}/comment`, comment);
  }


  // Eliminar un comentario
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Actualizar un comentario
  updateComment(comment: IComment): Observable<IComment> {
    return this.http.put<IComment>(`${this.baseUrl}/${comment.id}`, comment);
  }
}
