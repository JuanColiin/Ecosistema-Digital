import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { IComment } from '../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    comments: IComment[] = [];
    newComment: IComment = { id: 0, text: '', author_id: 1, author_name: 'Usuario', project_id: 1 };
    editingComment: IComment | null = null;
    projectId!: number;  // Usamos el operador ! para indicar que no será null/undefined

    constructor(
      private commentService: CommentService,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // Obtiene el projectId desde la URL
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      this.getComments();
    });
  }

  // Obtener los comentarios de un proyecto
  getComments(): void {
    this.commentService.getCommentsByProjectId(this.projectId).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (err) => {
        console.error('Error al cargar comentarios', err);
      }
    });
  }

  // Crear un nuevo comentario
  createComment(): void {
    this.newComment.project_id = this.projectId;
    this.commentService.createComment(this.newComment).subscribe({
      next: (comment) => {
        this.comments.push(comment);  // Agregar el nuevo comentario a la lista
        this.newComment.text = '';  // Limpiar el campo del formulario
      },
      error: (err) => {
        console.error('Error al crear comentario', err);
      }
    });
  }

  // Eliminar un comentario
  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe({
      next: () => {
        this.comments = this.comments.filter(comment => comment.id !== id);  // Eliminar el comentario de la lista
      },
      error: (err) => {
        console.error('Error al eliminar comentario', err);
      }
    });
  }

  // Iniciar el proceso de edición
  editComment(comment: IComment): void {
    this.editingComment = { ...comment };  // Hacemos una copia del comentario para editarlo
  }

  // Actualizar un comentario
  updateComment(): void {
    if (this.editingComment) {
      this.commentService.updateComment(this.editingComment).subscribe({
        next: (updatedComment) => {
          const index = this.comments.findIndex(c => c.id === updatedComment.id);
          if (index !== -1) {
            this.comments[index] = updatedComment;  // Actualizar el comentario en la lista
          }
          this.editingComment = null;  // Limpiar el campo de edición
        },
        error: (err) => {
          console.error('Error al actualizar comentario', err);
        }
      });
    }
  }
}
