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
  newComment: IComment = { id: 0, text: '', author_id: 25, author_name: 'Usuario', project_id: 1 };  // Cambia el author_id por el id del usuario logueado
  editingComment: IComment | null = null;
  projectId!: number;

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];  // Extraemos el projectId desde la URL
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
    this.newComment.project_id = this.projectId;// Asociamos el comentario al proyecto
    this.commentService.createComment(this.newComment).subscribe({
      next: (comment) => {
        this.comments.push(comment);  // Agregar el nuevo comentario a la lista
        this.newComment.text = '';// Limpiar el campo del formulario
        this.getComments();
      },
      error: (err) => {
        console.error('Error al crear comentario', err);
        alert('No se ha podido publicar el comentario, intenta nuevamente');
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
    this.editingComment = { ...comment };  // Guardar una copia del comentario que estamos editando
  }

  // Guardar los cambios en el comentario editado
  saveComment(): void {
    if (this.editingComment) {
      this.commentService.updateComment(this.editingComment).subscribe(
        (updatedComment) => {
          const index = this.comments.findIndex(comment => comment.id === updatedComment.id);
          if (index !== -1) {
            this.comments[index] = updatedComment;
          }
          this.editingComment = null;  // Limpiamos el formulario de edición
        },
        (error) => {
          console.error('Error al actualizar comentario:', error);
          alert('Hubo un error al actualizar el comentario. Por favor, inténtalo de nuevo.');
        }
      );
    }
  }
}

