// comment.component.ts
import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: any[] = [];  // Aquí almacenamos los comentarios
  newCommentText: string = '';  // Para almacenar el texto de un nuevo comentario

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    // Llamamos al servicio para obtener los comentarios
    this.commentService.getComments().subscribe({
      next: (data) => {
        this.comments = data;  // Asignamos los datos al array de comentarios
      },
      error: (error) => {
        console.error('Error al cargar los comentarios', error);
      }
    });
  }

  // Método para crear un comentario
  createComment() {
    const newComment = {
      text: this.newCommentText,
      author: { name: 'Usuario de prueba' }  // Datos ficticios del autor
    };

    this.commentService.createComment(newComment).subscribe({
      next: (response) => {
        if (response) {
          this.comments.push(response);  // Si el comentario se crea correctamente, lo agregamos a la lista
          this.newCommentText = '';  // Limpiamos el campo de texto
        }
      },
      error: (error) => {
        console.error('Error al crear el comentario', error);
      }
    });
  }

  // Método para borrar un comentario
  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe({
      next: (response) => {
        if (response) {
          this.comments = this.comments.filter(comment => comment.id !== commentId);  // Eliminamos el comentario de la lista
        }
      },
      error: (error) => {
        console.error('Error al borrar el comentario', error);
      }
    });
  }
}
