import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl = 'http://localhost:8080/comment';  // URL del endpoint

  constructor(private http: HttpClient) { }

  // Obtener los comentarios de un proyecto
  getCommentsByProjectId(projectId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiUrl}/project/${projectId}`);
  }

  // Crear un comentario
  createComment(comment: IComment): Observable<IComment> {
    return this.http.post<IComment>(this.apiUrl, comment);
  }

  // Eliminar un comentario
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un comentario
  updateComment(comment: IComment): Observable<IComment> {
    return this.http.put<IComment>(`${this.apiUrl}/${comment.id}`, comment);
  }
}
