import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private baseUrl = 'http://localhost:8080/project';

  constructor(private http: HttpClient) {}

  createPublicacion(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }
}
