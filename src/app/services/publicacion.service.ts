import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private apiUrl = 'http://localhost:8080/publicaciones'; // Endpoint placeholder

  constructor(private http: HttpClient) {}

  createPublicacion(publicacionData: any): Observable<any> {
    return this.http.post(this.apiUrl, publicacionData);
  }
}
