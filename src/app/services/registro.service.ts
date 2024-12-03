import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:8080/user/register';

  constructor(private http: HttpClient) {}

  register(user: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
