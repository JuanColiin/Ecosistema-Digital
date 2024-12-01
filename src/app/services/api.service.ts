import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../models/project.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';

  //Incorporar HttpClient para hacer peticiones Http a la API, ya que no hay Fetch

  constructor(private _http: HttpClient) { }
  //Para traer todos los proyectos
  public getAllEmprendimientos(): Observable<IProject[]> {
    return this._http.get<IProject[]>(this.baseUrl);
  }
  //Para traer un proyecto por su id
  public getEmprendimiento(id: number): Observable<IProject> {
    return this._http.get<IProject>(`${this.baseUrl}/${id}`);
  }
  //Para crear un proyecto
  public postEmprendimiento(project: IProject): Observable<IProject> {
    return this._http.post<IProject>(`${this.baseUrl}`, project);
  }
  //Para actualizar un proyecto
  public updateEmprendimiento(project: IProject): Observable<IProject> {
    return this._http.put<IProject>(`${this.baseUrl}/${project.id}`, project);
  }
  //Para eliminar un proyecto
  public deleteEmprendimiento(id: number): Observable<IProject> {
    return this._http.delete<IProject>(`${this.baseUrl}/${id}`);
  }

}
